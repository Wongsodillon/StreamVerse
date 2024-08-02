import React, { ReactNode } from "react";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";

type LayoutProps = {
  children?: ReactNode;
  isSidebar: boolean;
  setIsSidebar: (value: boolean) => void;
};

const Layout = ({ children, isSidebar, setIsSidebar }: LayoutProps) => {
  return (
    <div className="app-container" style={{ display: "flex", minHeight: "100vh", position: "relative" }}>
      <Sidebar isSidebar={isSidebar} />
      <div className="main-content" style={{ 
        flex: 1, 
        display: "flex", 
        flexDirection: "column",
        marginLeft: isSidebar ? "0" : "0", // Adjust the margin based on sidebar state
        marginTop: "0", // Adjust the margin to accommodate the Topbar height
        height: "calc(100vh - 60px)", // Adjust height based on Topbar height
        overflow: "hidden" // Prevent scrollbars in the main content area
      }}>
        <Topbar setIsSidebar={setIsSidebar} />
        <main style={{ flex: 1, overflowY: "auto" }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
