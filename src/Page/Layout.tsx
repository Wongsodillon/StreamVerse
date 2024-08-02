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
    <div className="app-container" style={{ display: "flex", minHeight: "100vh" }}>
      {isSidebar && (
        <div className="sidebar" style={{ width: "250px", backgroundColor: "#f4f4f4" }}>
          <Sidebar />
        </div>
      )}
      <div className="main-content" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar setIsSidebar={setIsSidebar} />
        <main style={{ flex: 1 }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
