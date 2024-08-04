import { X } from "react-feather";
import { Button } from "./ui/button";
import SidebarLink from "./SidebarLink";
import { Separator } from "./ui/separator";
import ProfileStatus from "./ProfileStatus";
import { Accordion, AccordionContent, AccordionTrigger } from "./ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";

type SidebarProps = {
  show?: boolean;
  toggleShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ show = true, toggleShow }: SidebarProps) => {
  return (
    <aside
      className={
        "absolute left-0 top-0 z-[999] flex h-screen w-60 flex-col overflow-y-hidden bg-white duration-300 ease-linear md:static md:translate-x-0 " +
        (show ? "translate-x-0" : "-translate-x-full")
      }
    >
      <div className="px-6 py-6 flex justify-between items-center">
        <p className="text-black text-2xl font-semibold">Streaming</p>
        <button onClick={() => toggleShow(false)} className="lg:hidden">
          <X className="text-black" size={24} />
        </button>
      </div>
      <div className="no-scrollbar overflow-y-auto flex flex-col duration-300 ease-linear">
        <nav className="py-4 px-4">
          <div className="flex flex-col gap-4">
            <Button
              variant={"secondary"}
              className="w-full py-6 text-xl rounded-xl"
            >
              New Feed
            </Button>
            <SidebarLink to="#">Trending</SidebarLink>
            <SidebarLink to="#">Following</SidebarLink>
            <SidebarLink to="#">Your Videos</SidebarLink>
            <Separator />
            <Accordion type="single" collapsible className="w-full -mt-2">
              <AccordionItem value="1">
                <AccordionTrigger>
                  <p className="text-[#868686] text-lg">Following</p>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                  <ProfileStatus />
                  <ProfileStatus />
                  <ProfileStatus />
                  <ProfileStatus />
                  <ProfileStatus />
                  <ProfileStatus />
                  <ProfileStatus />
                  <ProfileStatus />
                  <ProfileStatus />
                  <ProfileStatus />
                  <ProfileStatus />
                  <ProfileStatus />
                  <ProfileStatus />
                  <ProfileStatus />
                  <ProfileStatus />
                  <ProfileStatus />
                  <ProfileStatus />
                  <ProfileStatus
                    username="propanemethanolpropanemethanol"
                    online={true}
                  />
                  <ProfileStatus username="marcodave_" />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
