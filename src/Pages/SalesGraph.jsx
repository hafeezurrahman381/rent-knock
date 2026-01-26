import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./SalesGraph.css";

const data = [
  { month: "Jan", sales: 4000, revenue: 2400, users: 1200 },
  { month: "Feb", sales: 3000, revenue: 1398, users: 980 },
  { month: "Mar", sales: 2000, revenue: 9800, users: 1500 },
  { month: "Apr", sales: 2780, revenue: 3908, users: 1800 },
  { month: "May", sales: 1890, revenue: 4800, users: 2200 },
  { month: "Jun", sales: 2390, revenue: 3800, users: 2500 },
  { month: "Jul", sales: 3490, revenue: 4300, users: 3000 },
];

const SalesGraph = () => {
  return (
    <div className="dashboard-graph-container">
      <h2 className="graph-title">Dashboard Analytics</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ffc658" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="grid-style"/>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "#1f1f1f", borderRadius: "10px", border: "none" }} />
          <Legend verticalAlign="top" height={36}/>
          <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" activeDot={{ r: 8 }}/>
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={3} fill="url(#colorRevenue)" activeDot={{ r: 8 }}/>
          <Line type="monotone" dataKey="users" stroke="#ffc658" strokeWidth={3} fill="url(#colorUsers)" activeDot={{ r: 8 }}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesGraph;




