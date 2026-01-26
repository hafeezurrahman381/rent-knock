import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ForgotPin from "./Pages/ForgotPin";
import { AuthProvider } from "./context/AuthContext";
import Favourite from "./Pages/Favourite";
import Help from "./Pages/Help";
import History from "./Pages/History";
import AllCategories from "./Pages/AllCategories";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Privacy from "./Pages/Privacy";
import DashboardLayout from "../src/layout/DashboardLayout"; // layout with sidebar
import DashboardHome from "./Pages/DashboardHome";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<ForgotPin />} />
          <Route path="/favorites" element={<Favourite />} />
          <Route path="/help" element={<Help />} />
          <Route path="/history" element={<History />} />
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* Dashboard routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            {/* nested route inside dashboard layout */}
            <Route index element={<DashboardHome />} /> {/* default dashboard page */}
            <Route path="stats" element={<DashboardHome />} /> {/* example for more pages */}
            {/* add more dashboard pages here if needed */}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;






