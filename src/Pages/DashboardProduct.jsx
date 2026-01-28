import React from "react";
import "./DashboardProduct.css";

const orders = [
  { id: "13256498", name: "Keyboard", qty: 125, status: "Rejected", amount: "$70,999" },
  { id: "13286564", name: "Computer Accessories", qty: 100, status: "Approved", amount: "$83,348" },
  { id: "84564564", name: "Camera Lens", qty: 40, status: "Rejected", amount: "$40,570" },
  { id: "86739658", name: "TV", qty: 99, status: "Pending", amount: "$410,780" },
  { id: "98652366", name: "Handset", qty: 50, status: "Approved", amount: "$10,239" },
  { id: "98753263", name: "Mouse", qty: 89, status: "Rejected", amount: "$10,570" },
];

export default function DashboardProduct() {
  return (
    <div className="dashboard-row">

      {/* ===== Recent Orders Table ===== */}
      <div className="orders-card">
        <h3>Recent Orders</h3>

        <table>
          <thead>
            <tr>
              <th>Tracking No.</th>
              <th>Product Name</th>
              <th>Total Order</th>
              <th>Status</th>
              <th>Total Amount</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>
                  <span className={`status ${item.status.toLowerCase()}`}>
                    ● {item.status}
                  </span>
                </td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== Analytics Report ===== */}
      <div className="analytics-card">
        <h3>Analytics Report</h3>

        <div className="analytics-item">
          <span>Company Finance Growth</span>
          <strong>+45.14%</strong>
        </div>

        <div className="analytics-item">
          <span>Company Expenses Ratio</span>
          <strong>0.58%</strong>
        </div>

        <div className="analytics-item">
          <span>Business Risk Cases</span>
          <strong className="risk-low">Low</strong>
        </div>

        {/* Fake Graph Line */}
        <div className="graph-box">
          <svg viewBox="0 0 300 120">
            <polyline
              fill="none"
              stroke="#ff9f43"
              strokeWidth="3"
              points="0,80 50,20 100,100 150,50 200,70 250,40 300,90"
            />
          </svg>
        </div>
      </div>

    </div>
  );
}
