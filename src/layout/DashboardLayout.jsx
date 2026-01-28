import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Pages/SideBar";
import DashboardHeader from "../Pages/DashboardHeader";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true); // Sidebar open/close state

  return (
    <div style={{ display: "flex" }}>
      
      {/* Sidebar */}
      <SideBar open={open} setOpen={setOpen} />

      {/* Main content */}
      <div style={{ flex: 1, minHeight: "100vh", background: "#f8fafc" }}>
        {/* Header */}
        <DashboardHeader open={open} setOpen={setOpen} />

        {/* Page content */}
        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
