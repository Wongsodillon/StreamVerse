import { Link, LinkProps } from "react-router-dom";

const SidebarLink = ({
  active = false,
  className = "",
  children,
  ...props
}: LinkProps & { active?: boolean }) => {
  return (
    <Link
      {...props}
      className={`flex items-center px-4 py-2 text-lg font-medium hover:text-darkPurple transition-all duration-200 ${
        active ? "text-darkPurple" : "text-[#868686]"
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default SidebarLink;
