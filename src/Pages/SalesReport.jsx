import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import "./SalesReport.css";

// Different Data
const todayData = [
  { date: "10 AM", income: 120, cost: 80 },
  { date: "12 PM", income: 150, cost: 100 },
  { date: "2 PM", income: 180, cost: 130 },
];

const weeklyData = [
  { date: "Mon", income: 180, cost: 120 },
  { date: "Tue", income: 90, cost: 45 },
  { date: "Wed", income: 135, cost: 75 },
  { date: "Thu", income: 115, cost: 150 },
  { date: "Fri", income: 120, cost: 165 },
  { date: "Sat", income: 200, cost: 140 },
  { date: "Sun", income: 145, cost: 95 },
];

const monthlyData = [
  { date: "Week 1", income: 500, cost: 300 },
  { date: "Week 2", income: 700, cost: 400 },
  { date: "Week 3", income: 650, cost: 500 },
  { date: "Week 4", income: 800, cost: 600 },
];

export default function SalesReport() {
  const [filter, setFilter] = useState("Today");
  const [data, setData] = useState(todayData);

  const handleChange = (e) => {
    const value = e.target.value;
    setFilter(value);

    if (value === "Today") setData(todayData);
    if (value === "Weekly") setData(weeklyData);
    if (value === "Monthly") setData(monthlyData);
  };

  return (
    <div className="sales-card">

      {/* Header */}
      <div className="sales-header">
        <h3>Sales Report</h3>

        <select onChange={handleChange} value={filter}>
          <option>Today</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      {/* Net Profit */}
      <div className="net-profit">
        <span>Net Profit</span>
        <h2>$1560</h2>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#fbbf24" radius={[6,6,0,0]} />
          <Bar dataKey="cost" fill="#3b82f6" radius={[6,6,0,0]} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

