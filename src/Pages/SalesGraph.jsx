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
import "./SalesGraph.css";

const SalesGraph = () => {
  const [view, setView] = useState("Month");

  // Monthly data
  const monthData = [
    { month: "Jan", pageViews: 110, sessions: 70 },
    { month: "Feb", pageViews: 80, sessions: 60 },
    { month: "Mar", pageViews: 150, sessions: 100 },
    { month: "Apr", pageViews: 40, sessions: 35 },
    { month: "May", pageViews: 90, sessions: 60 },
    { month: "Jun", pageViews: 105, sessions: 40 },
    { month: "Jul", pageViews: 95, sessions: 25 },
    { month: "Aug", pageViews: 115, sessions: 50 },
    { month: "Sep", pageViews: 100, sessions: 65 },
    { month: "Oct", pageViews: 85, sessions: 50 },
    { month: "Nov", pageViews: 115, sessions: 52 },
    { month: "Dec", pageViews: 40, sessions: 37 },
  ];

  // Weekly data
  const weekData = [
    { week: "Week 1", pageViews: 25, sessions: 15 },
    { week: "Week 2", pageViews: 40, sessions: 30 },
    { week: "Week 3", pageViews: 30, sessions: 20 },
    { week: "Week 4", pageViews: 50, sessions: 35 },
  ];

  const incomeData = [
    { day: "Mo", amount: 1000 },
    { day: "Tu", amount: 1500 },
    { day: "We", amount: 900 },
    { day: "Th", amount: 600 },
    { day: "Fr", amount: 950 },
    { day: "Sa", amount: 800 },
    { day: "Su", amount: 1100 },
  ];

  // Choose data based on view
  const visitorData = view === "Month" ? monthData : weekData;

  return (
    <div className="db-container">
      <div className="db-charts-row">
        {/* Visitor Chart */}
        <div className="db-chart-card">
          <div className="db-chart-header">
            <h3>Unique Visitor</h3>
            <div className="db-view-toggle">
              <button
                className={view === "Month" ? "active" : ""}
                onClick={() => setView("Month")}
              >
                Month
              </button>
              <button
                className={view === "Week" ? "active" : ""}
                onClick={() => setView("Week")}
              >
                Week
              </button>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <AreaChart
              data={visitorData}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="visitorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4e54c8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4e54c8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="sessionsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8f94fb" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8f94fb" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey={view === "Month" ? "month" : "week"}
                tick={{ fontSize: 12 }}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip
                contentStyle={{ fontSize: "12px" }}
                itemStyle={{ fontSize: "12px" }}
              />
              <Area
                type="monotone"
                dataKey="pageViews"
                stroke="#4e54c8"
                fillOpacity={1}
                fill="url(#visitorGradient)"
                animationDuration={2000}
              />
              <Area
                type="monotone"
                dataKey="sessions"
                stroke="#8f94fb"
                fillOpacity={1}
                fill="url(#sessionsGradient)"
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Income Chart */}
        <div className="db-chart-card">
          <h3>Income Overview</h3>
          <p className="db-income-value">$7,650</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={incomeData}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ fontSize: "12px" }} itemStyle={{ fontSize: "12px" }} />
              <Bar
                dataKey="amount"
                fill="#4dd0e1"
                animationDuration={1500}
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SalesGraph;




