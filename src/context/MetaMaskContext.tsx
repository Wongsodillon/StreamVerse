import { createContext, ReactNode, useState } from "react";
import { MetaMaskClient } from "@/services/metamaskClient";

interface MetamaskContextProps {
  metamaskAccountAddress: string;
  setMetamaskAccountAddress: (newValue: string) => void;
}

const initValue: MetamaskContextProps = {
  metamaskAccountAddress: "",
  setMetamaskAccountAddress: () => {},
};

export const MetamaskContext = createContext<MetamaskContextProps>(initValue);

export const MetamaskContextProvider = ({ children }: { children: ReactNode }) => {
  const [metamaskAccountAddress, setMetamaskAccountAddress] = useState("");

  return (
    <MetamaskContext.Provider
      value={{
        metamaskAccountAddress,
        setMetamaskAccountAddress,
      }}
    >
      <MetaMaskClient />
      {children}
    </MetamaskContext.Provider>
  );
};
