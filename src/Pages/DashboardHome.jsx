import React from "react";
import DashboardStats from "./DashboardStats";
import SalesGraph from "../Pages/SalesGraph";
import { FaSearch, FaBell } from "react-icons/fa";
import DashboardProduct from "../Pages/DashboardProduct";
import SalesReport from "../Pages/SalesReport";

const DashboardHome = () => {
  

  return (
    <div>
  
         <DashboardStats />
         <SalesGraph />
         <DashboardProduct />
         <SalesReport />
    </div>
  );
};

export default DashboardHome;


