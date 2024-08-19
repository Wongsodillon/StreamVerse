import { X } from "react-feather";
import { Link, useLocation } from "react-router-dom";
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
        "absolute left-0 top-0 z-[999] flex h-screen w-60 lg:min-w-[12.5%] flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 " +
        (show ? "translate-x-0" : "-translate-x-full")
      }
    >
      <div className="md:px-6 px-4 py-6 flex justify-between items-center">
        <Link
          to={"/home"}
          className="text-black text-2xl font-bold hover:text-purple-500 transition-all duration-300 ease-linear"
        >
          StreamVerse
        </Link>
        <button onClick={() => toggleShow(false)} className="lg:hidden">
          <X className="text-black" size={24} />
        </button>
      </div>
      <div className="no-scrollbar overflow-y-auto flex flex-col duration-300 ease-linear">
        <nav className="py-4 px-4 lg:px-6">
          <div className="flex flex-col gap-4">
            <SidebarLink to="/home">Home</SidebarLink>
            <SidebarLink to="/home/category">Category</SidebarLink>
            {/* <SidebarLink to="/home/trending">Trending</SidebarLink> */}
            <Separator />
            <Accordion type="single" collapsible className="w-full -mt-2">
              <AccordionItem value="1">
                <AccordionTrigger>
                  <p className="text-[#868686] text-lg">Friend</p>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
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
