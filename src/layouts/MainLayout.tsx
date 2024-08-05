import { PropsWithChildren, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Menu, Search, Bell, Settings, LogOut, User } from "react-feather";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type MainLayoutProps = PropsWithChildren & {
  scrollable?: boolean;
};

const MainLayout = ({ scrollable = true, children }: MainLayoutProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
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
          <div className="flex flex-grow items-center justify-between p-5 shadow-2">
            <div className="flex gap-4 items-center">
              <button onClick={toggleSidebar} className="block md:hidden">
                <Menu className="text-darkGray" size={24} />
              </button>
              <form action="">
                <div className="relative">
                  <Search
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 text-darkGray"
                    size={20}
                  />
                  <Input
                    className="w-full bg-transparent text-lg pl-10 pr-4 focus:outline-none xl:w-125 border-none"
                    placeholder="Search everything"
                  />
                </div>
              </form>
            </div>
            <div className="flex gap-4 items-center">
              <div className="relative">
                <Bell className="text-darkGray" size={28} />
                <div className="flex justify-center items-center absolute -top-1 -right-0 w-3.5 h-3.5 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
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
