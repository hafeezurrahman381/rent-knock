import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ForgotPin from "./Pages/ForgotPin";
import { AuthProvider } from "./context/AuthContext";
import Favourite from "./Pages/Favourite";
import History from "./Pages/History";
import AllCategories from "./Pages/AllCategories";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Privacy from "./Pages/Privacy";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardHome from "./Pages/DashboardHome";
import CreateShop from "./Pages/CreateShop";
import ShopVerification from "./Pages/ShopVerification";
import ShopDashboardLayout from "./layout/ShopDashboardLayout";
import ShopDashboardHome from "./Pages/ShopDashboardHome";
import Help from "./Pages/Help";
import OrdersAndShipping from "./Pages/OrdersAndShipping";
import ReturnsAndRefunds from "./Pages/ReturnsAndRefunds";
import AccountSecurity from "./Pages/AccountSecurity";
import PaymentsPricing from "./Pages/PaymentsPricing";
import SellingOnRentKnock from "./Pages/SellingOnRentKnock";
import PromotionsOffers from "./Pages/PromotionsOffers";
import PrivacyLegal from "./Pages/PrivacyLegal";
import TechnicalSupport from "./Pages/TechnicalSupport";




function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<ForgotPin />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/history" element={<History />} />
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/createshop" element={<CreateShop />} />
          <Route path="/shopverify" element={<ShopVerification />} />
          <Route path="/helpcenter" element={<Help />} />
          <Route path="/orders-shipping" element={<OrdersAndShipping />} />
          <Route path="/returns-refunds" element={<ReturnsAndRefunds />} />
          <Route path="/account-security" element={<AccountSecurity />} />
          <Route path="/payments-pricing" element={<PaymentsPricing />} />
          <Route path="/selling" element={<SellingOnRentKnock />} />
          <Route path="/promotions" element={<PromotionsOffers />} />
          <Route path="/privacy-legal" element={<PrivacyLegal />} />
          <Route path="/tech-support" element={<TechnicalSupport />} />


          {/* 🔹 NORMAL DASHBOARD */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="stats" element={<DashboardHome />} />
          </Route>

          {/* 🔹 SHOP DASHBOARD */}
          <Route path="/shopdashboard" element={<ShopDashboardLayout />}>
            <Route index element={<ShopDashboardHome />} />
            <Route path="shopdashboard" element={<ShopDashboardHome />} />
            {/* Add more shop sub-routes here later like products, orders etc */}
          </Route>



        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;






