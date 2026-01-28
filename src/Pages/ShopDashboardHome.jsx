import React from "react";
import "./ShopDashboardHome.css";

const orders = [
    { id: "#00102", product: "Nike Air Max", date: "29 Jan 2026", price: "$120", status: "Approved" },
    { id: "#00103", product: "Sony Controller", date: "28 Jan 2026", price: "$85", status: "Pending" },
    { id: "#00104", product: "Apple Watch", date: "27 Jan 2026", price: "$350", status: "Rejected" },
    { id: "#00105", product: "Samsung TV", date: "26 Jan 2026", price: "$900", status: "Approved" },
];

const ShopDashboardHome = () => {
    return (
        <div className="shop-home-container">

            {/* 1. Header (Already in Layout, but we can add minor greeting here if needed) */}

            {/* 2. Stats Row */}
            <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Overview</h3>
            {/* We import the components we created */}
            <ShopStats />

            {/* 3. Charts Row */}
            <ShopSalesGraph />

            {/* 4. Recent Orders Table (Inline for simplicity or separated) */}
            <div className="orders-section">
                <div className="chart-header">
                    <h3>Recent Orders</h3>
                </div>
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, i) => (
                            <tr key={i}>
                                <td>{order.id}</td>
                                <td>{order.product}</td>
                                <td>{order.date}</td>
                                <td>{order.price}</td>
                                <td>
                                    <span className={`status-badge status-${order.status.toLowerCase()}`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

import ShopStats from "./ShopStats";
import ShopSalesGraph from "./ShopSalesGraph";

export default ShopDashboardHome;
