import React, { ReactNode } from "react";
import Sidebar from "./scenes/global/Sidebar"; // Assuming Navbar is a sidebar

type LayoutProps = {
  children?: ReactNode;
  isSidebar: boolean; // Add a prop for sidebar visibility
};

const Layout = ({ children, isSidebar }: LayoutProps) => {
  return (
    <div className="app-container" style={{ display: "flex", minHeight: "100vh" }}>
      {isSidebar && (
      <div className="sidebar">
        <Sidebar/>
      </div>
    )}
      <div className="main-content" style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
