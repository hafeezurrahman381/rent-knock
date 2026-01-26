import React from "react";
import DashboardStats from "./DashboardStats";
import SalesGraph from "../Pages/SalesGraph";
import { FaSearch, FaBell } from "react-icons/fa";
import DashboardHeader from "./DashboardHeader";

const DashboardHome = () => {
  

  return (
    <div>
  
         <DashboardHeader />
         <DashboardStats />
         <SalesGraph />
    </div>
  );
};

export default DashboardHome;


