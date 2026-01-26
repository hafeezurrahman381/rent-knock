import React from "react";

import { Outlet } from "react-router-dom";
import SideBar from "../Pages/SideBar";

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1, background: "#f8fafc", minHeight: "100vh" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
