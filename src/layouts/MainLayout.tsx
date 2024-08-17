import { PropsWithChildren, useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Menu, Search, Settings, LogOut, User, Video } from "react-feather";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/context/UserContext";
import { BASE_URL } from "@/config/constants";
import { Button } from "@/components/ui/button";
import ConnectToWalletModal from "@/components/ConnectToWalletModal";
import { useWalletInterface } from "@/services/useWalletInterface";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ProfilePicture from "@/components/ProfilePicture";

type MainLayoutProps = PropsWithChildren & {
  scrollable?: boolean;
};

const MainLayout = ({ scrollable = true, children }: MainLayoutProps) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, fetchUser] = useUser();
  const { accountId, walletInterface } = useWalletInterface();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // useEffect(() => {
  //   console.log(user);
  // }, []);

  const handleConnect = async () => {
    if (accountId) {
      walletInterface.disconnect();
    }
  };
  const handleLogout = async () => {
    if (accountId) {
      walletInterface.disconnect();
      return;
    }
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      await axios.post(
        `${BASE_URL}/auth/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("token");
      fetchUser();
    } catch (error: any) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar show={showSidebar} toggleShow={toggleSidebar} />
      {showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className="fixed inset-0 z-[800] bg-black bg-opacity-20"
        ></div>
      )}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <header className="sticky top-0 z-50 flex w-full bg-white">
          <div className="flex flex-grow items-center justify-between py-4 px-3 sm:p-5 shadow-2">
            <div className="flex w-full gap-2 sm:gap-4 items-center">
              <button onClick={toggleSidebar} className="block lg:hidden">
                <Menu className="text-darkGray" size={24} />
              </button>
              <form action="" className="w-full">
                <div className="relative">
                  <Search
                    className="hidden sm:block absolute top-1/2 left-2 transform -translate-y-1/2 text-darkGray"
                    size={20}
                  />
                  <Input
                    className="w-full bg-transparent text-lg pl-4 sm:pl-10 pr-4 focus:outline-none focus-visible:ring-0 xl:w-125 border-none"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div className="flex gap-4 items-center">
              {!user && (
                <Button
                  variant={"secondary"}
                  className="text-md"
                  onClick={() => navigate("/auth")}
                >
                  Login & Register
                </Button>
              )}
              {!accountId && user && <ConnectToWalletModal />}
              {accountId && user && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={"secondary"}
                        className="text-md"
                        onClick={handleConnect}
                      >
                        Disconnect Wallet
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="p-3">
                      <p className="text-sm">{accountId}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {user && (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <ProfilePicture
                      src={user.profile.profile_picture}
                      full_name={user.profile.full_name}
                      className="w-12 h-12"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 px-2 py-2">
                    <div className="flex px-2 py-2">
                      <p className="text-md font-bold">
                        {user.profile.full_name}
                      </p>
                    </div>
                    <DropdownMenuGroup>
                      <DropdownMenuItem onClick={() => navigate("/account")}>
                        <User className="mr-2 h-5 w-5" />
                        Account
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          navigate(`/stream/${user.stream.topic_id}`)
                        }
                      >
                        <Video className="mr-2 h-5 w-5" />
                        My Channel
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-5 w-5" />
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-5 w-5" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </header>
        <main className={scrollable ? "" : "overflow-y-hidden"}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
