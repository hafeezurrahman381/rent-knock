import React from "react";
import { FaShoppingBag, FaDollarSign, FaUsers, FaChartLine } from "react-icons/fa";
import "./ShopDashboardHome.css"; // We can reuse the css file created
import "./ShopStats.css"; // We can reuse the css file created
const statsData = [
    {
        title: "Total Sales",
        value: "$45,600",
        icon: <FaDollarSign />,
        
    },
    {
        title: "Total Orders",
        value: "1,208",
        icon: <FaShoppingBag />,
        
    },
    {
        title: "New Customers",
        value: "540",
        icon: <FaUsers />,
        
    },
    {
        title: "Growth",
        value: "+24%",
        icon: <FaChartLine />,
        
    },
];

const ShopStats = () => {
    return (
        <div className="dashboard-grid-row">
            {statsData.map((item, index) => (
                <div className="shop-stat-card" key={index}>
                    <div className="shop-stat-icon" style={{ color: item.color === "#EFF4FB" ? "#4318FF" : item.color, background: item.color === "#EFF4FB" ? "#EFF4FB" : item.color + "1A" }}>
                        {item.icon}
                    </div>
                    <div className="shop-stat-info">
                        <h4>{item.title}</h4>
                        <p>{item.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShopStats;
