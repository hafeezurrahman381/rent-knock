import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ShopSidebar from "../Pages/ShopSidebar";
import ShopDashboardHeader from "../Pages/ShopDashboardHeader";

const ShopDashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div style={{ display: "flex", width: "100%", background: "#f4f7fe", minHeight: "100vh" }}>

      {/* SIDEBAR - Fixed width management */}
      <ShopSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* MAIN CONTENT WRAPPER */}
      <div
        style={{
          flexGrow: 1,
          marginLeft: sidebarOpen ? "260px" : "80px", // Sidebar styling se match karein
          transition: "margin-left 0.3s ease",
          display: "flex",
          flexDirection: "column",
          width: "100%"
        }}
      >

        {/* HEADER */}
        <ShopDashboardHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* DYNAMIC PAGE CONTENT */}
        <div style={{ padding: "20px", flex: 1 }}>
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default ShopDashboardLayout;