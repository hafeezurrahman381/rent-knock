import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    MdDashboard,
    MdShoppingBag,
    MdShoppingCart,
    MdPeople,
    MdBarChart,
    MdSettings,
    MdLogout,
    MdStorefront
} from 'react-icons/md';
import { IoDocuments } from 'react-icons/io5';
import './ShopSidebar.css';

const ShopSidebar = ({ open, setOpen }) => {
    return (
        <div className={`shop-sidebar ${open ? '' : 'collapsed'}`}>

            {/* --- Logo Area --- */}
            <div className="logo-container">
                <MdStorefront className="shop-logo-icon" />
                <span className="logo-text">My Shop</span>
            </div>

            {/* --- Menu Items --- */}
            <ul className="sidebar-menu">

                <li className="menu-item">
                    <NavLink
                        to="/shop/dashboard"
                        className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
                        end
                    >
                        <span className="menu-icon"><MdDashboard /></span>
                        <span className="menu-text">Dashboard</span>
                    </NavLink>
                </li>

                <li className="menu-item">
                    <NavLink
                        to="/shop/products"
                        className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
                    >
                        <span className="menu-icon"><MdShoppingBag /></span>
                        <span className="menu-text">Products</span>
                    </NavLink>
                </li>

                <li className="menu-item">
                    <NavLink
                        to="/shop/orders"
                        className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
                    >
                        <span className="menu-icon"><MdShoppingCart /></span>
                        <span className="menu-text">Orders</span>
                    </NavLink>
                </li>

                <li className="menu-item">
                    <NavLink
                        to="/shop/customers"
                        className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
                    >
                        <span className="menu-icon"><MdPeople /></span>
                        <span className="menu-text">Customers</span>
                    </NavLink>
                </li>

                <li className="menu-item">
                    <NavLink
                        to="/shop/reports"
                        className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
                    >
                        <span className="menu-icon"><IoDocuments /></span>
                        <span className="menu-text">Reports</span>
                    </NavLink>
                </li>

                <li className="menu-item">
                    <NavLink
                        to="/shop/analytics"
                        className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
                    >
                        <span className="menu-icon"><MdBarChart /></span>
                        <span className="menu-text">Analytics</span>
                    </NavLink>
                </li>

                <div style={{ flexGrow: 1 }}></div>

                <li className="menu-item">
                    <NavLink
                        to="/shop/settings"
                        className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
                    >
                        <span className="menu-icon"><MdSettings /></span>
                        <span className="menu-text">Settings</span>
                    </NavLink>
                </li>

            </ul>

            {/* --- Footer / Upgrade Section --- */}
            <div className="sidebar-footer">
                <div className="upgrade-card">
                    <h4>Go Pro</h4>
                    <p>Unlock all features</p>
                    <button className="upgrade-btn">Upgrade</button>
                </div>

                <li className="menu-item" style={{ listStyle: 'none' }}>
                    <div className="menu-link" style={{ cursor: 'pointer', color: '#E31A1A' }}>
                        <span className="menu-icon"><MdLogout /></span>
                        <span className="menu-text">Logout</span>
                    </div>
                </li>
            </div>

        </div>
    );
};

export default ShopSidebar;
