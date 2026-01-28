import React, { useState } from "react";
import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const ShopSalesGraph = () => {
    const [view, setView] = useState("Month");

    const data = [
        { name: "Jan", sales: 4000, revenue: 2400 },
        { name: "Feb", sales: 3000, revenue: 1398 },
        { name: "Mar", sales: 2000, revenue: 9800 },
        { name: "Apr", sales: 2780, revenue: 3908 },
        { name: "May", sales: 1890, revenue: 4800 },
        { name: "Jun", sales: 2390, revenue: 3800 },
        { name: "Jul", sales: 3490, revenue: 4300 },
    ];

    return (
        <div className="dashboard-charts-row">

            {/* SALES GROWTH AREA CHART */}
            <div className="chart-card">
                <div className="chart-header">
                    <h3>Sales Growth</h3>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <button className={`chart-btn ${view === "Month" ? "active" : ""}`} onClick={() => setView("Month")}>Month</button>
                        <button className={`chart-btn ${view === "Week" ? "active" : ""}`} onClick={() => setView("Week")}>Week</button>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4318FF" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#4318FF" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E3E3E3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="sales" stroke="#4318FF" fillOpacity={1} fill="url(#colorSales)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* WEEKLY REVENUE BAR CHART */}
            <div className="chart-card">
                <div className="chart-header">
                    <h3>Weekly Revenue</h3>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Bar dataKey="revenue" fill="#6AD2FF" radius={[10, 10, 0, 0]} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default ShopSalesGraph;
