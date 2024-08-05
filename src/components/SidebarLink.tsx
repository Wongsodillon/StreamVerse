import { Link, LinkProps } from "react-router-dom";

const SidebarLink = ({
  active = false,
  className = "",
  children,
  ...props
}: LinkProps & { active?: boolean }) => {
  const activeStyles =
    "bg-purple-gradient px-3 text-white rounded-md transition-all duration-200 hover:text-white";

  return (
    <Link
      {...props}
      className={`flex items-center px-2 py-2 text-lg font-medium transition-all duration-200 hover:text-darkPurple ${
        active ? activeStyles : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default SidebarLink;
