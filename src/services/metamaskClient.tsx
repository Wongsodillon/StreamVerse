import { ContractId, AccountId } from "@hashgraph/sdk";
import { TokenId } from "node_modules/@hashgraph/sdk/lib/transaction/TransactionRecord";
import { useContext, useEffect } from "react";
import { appConfig } from "../config/index";
import { MetamaskContext } from "../context/MetaMaskContext";
import { ContractFunctionParameterBuilder } from "./contractFunctionParameterBuilder";
import { WalletInterface } from "./walletInterface";
import { ethers } from "ethers";

const currentNetworkConfig = appConfig.networks.testnet;

export const switchToHederaNetwork = async (ethereum: any) => {
  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: currentNetworkConfig.chainId }],
    });
  } catch (error: any) {
    if (error.code === 4902) {
      try {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainName: `Hedera (${currentNetworkConfig.network})`,
              chainId: currentNetworkConfig.chainId,
              nativeCurrency: {
                name: "HBAR",
                symbol: "HBAR",
                decimals: 18,
              },
              rpcUrls: [currentNetworkConfig.jsonRpcUrl],
            },
          ],
        });
      } catch (addError) {
        console.error(addError);
      }
    }
    console.error(error);
  }
};

const { ethereum } = window as any;
const getProvider = () => {
  if (!ethereum) {
    throw new Error("Metamask is not installed! Go install the extension!");
  }

  return new ethers.providers.Web3Provider(ethereum);
};

export const connectToMetamask = async () => {
  const provider = getProvider();

  let accounts: string[] = [];

  try {
    await switchToHederaNetwork(ethereum);
    accounts = await provider.send("eth_requestAccounts", []);
  } catch (error: any) {
    if (error.code === 4001) {
      console.warn("Please connect to Metamask.");
    } else {
      console.error(error);
    }
  }

  return accounts;
};

class MetaMaskWallet implements WalletInterface {
  public convertAccountIdToSolidityAddress(accountId: AccountId): string {
    const accountIdString =
      accountId.evmAddress !== null
        ? accountId.evmAddress.toString()
        : accountId.toSolidityAddress();

    return `0x${accountIdString}`;
  }

  async transferHBAR(toAddress: AccountId, amount: number) {
    const provider = getProvider();
    const signer = await provider.getSigner();
    const tx = await signer.populateTransaction({
      to: this.convertAccountIdToSolidityAddress(toAddress),
      value: ethers.utils.parseEther(amount.toString()),
    });
    try {
      const { hash } = await signer.sendTransaction(tx);
      await provider.waitForTransaction(hash);

      return hash;
    } catch (error: any) {
      console.log("Here");
      console.warn(error.message ? error.message : error);
      return null;
    }
  }

  async transferFungibleToken(
    toAddress: AccountId,
    tokenId: TokenId,
    amount: number
  ) {
    const hash = await this.executeContractFunction(
      ContractId.fromString(tokenId.toString()),
      "transfer",
      new ContractFunctionParameterBuilder()
        .addParam({
          type: "address",
          name: "recipient",
          value: this.convertAccountIdToSolidityAddress(toAddress),
        })
        .addParam({
          type: "uint256",
          name: "amount",
          value: amount,
        }),
      appConfig.constants.METAMASK_GAS_LIMIT_TRANSFER_FT
    );

    return hash;
  }

  async transferNonFungibleToken(
    toAddress: AccountId,
    tokenId: TokenId,
    serialNumber: number
  ) {
    const provider = getProvider();
    const addresses = await provider.listAccounts();
    const hash = await this.executeContractFunction(
      ContractId.fromString(tokenId.toString()),
      "transferFrom",
      new ContractFunctionParameterBuilder()
        .addParam({
          type: "address",
          name: "from",
          value: addresses[0],
        })
        .addParam({
          type: "address",
          name: "to",
          value: this.convertAccountIdToSolidityAddress(toAddress),
        })
        .addParam({
          type: "uint256",
          name: "nftId",
          value: serialNumber,
        }),
      appConfig.constants.METAMASK_GAS_LIMIT_TRANSFER_NFT
    );

    return hash;
  }

  async associateToken(tokenId: TokenId) {
    const hash = await this.executeContractFunction(
      ContractId.fromString(tokenId.toString()),
      "associate",
      new ContractFunctionParameterBuilder(),
      appConfig.constants.METAMASK_GAS_LIMIT_ASSOCIATE
    );

    return hash;
  }

  async executeContractFunction(
    contractId: ContractId,
    functionName: string,
    functionParameters: ContractFunctionParameterBuilder,
    gasLimit: number
  ) {
    const provider = getProvider();
    const signer = await provider.getSigner();
    const abi = [
      `function ${functionName}(${functionParameters.buildAbiFunctionParams()})`,
    ];

    const contract = new ethers.Contract(
      `0x${contractId.toSolidityAddress()}`,
      abi,
      signer
    );
    try {
      const txResult = await contract[functionName](
        ...functionParameters.buildEthersParams(),
        {
          gasLimit: gasLimit === -1 ? undefined : gasLimit,
        }
      );
      return txResult.hash;
    } catch (error: any) {
      console.warn(error.message ? error.message : error);
      return null;
    }
  }

  disconnect() {
    alert("Please disconnect using the Metamask extension.");
  }
}

export const metamaskWallet = new MetaMaskWallet();

export const MetaMaskClient = () => {
  const { metamaskAccountAddress, setMetamaskAccountAddress } =
    useContext(MetamaskContext);
  useEffect(() => {
    try {
      const provider = getProvider();
      provider.listAccounts().then((signers) => {
        if (signers.length !== 0) {
          console.log(signers[0]);
          setMetamaskAccountAddress(signers[0]);
        } else {
          console.log("Kontol");
          setMetamaskAccountAddress("");
        }
      });

      ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length !== 0) {
          console.log(accounts[0]);
          setMetamaskAccountAddress(accounts[0]);
        } else {
          console.log("Kontol");
          setMetamaskAccountAddress("");
        }
      });

      return () => {
        ethereum.removeAllListeners("accountsChanged");
      };
    } catch (error: any) {
      console.error(error.message ? error.message : error);
    }
  }, [setMetamaskAccountAddress, metamaskAccountAddress]);

  return null;
};
