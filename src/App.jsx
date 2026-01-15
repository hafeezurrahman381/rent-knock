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
import CreateStoreOptions from "./Pages/CreateStoreOptions";
import PostIndividual from "./Pages/PostIndividual";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Privacy from "./Pages/Privacy";



function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<ForgotPin />} />s
          <Route path="/favorites" element={<Favourite />} />
          <Route path="/help" element={<Help />} />
          <Route path="/history" element={<History />} />
         <Route path="/categories" element={<AllCategories />} />
         <Route path="/create-store" element={<CreateStoreOptions />} />
         <Route path="/individual" element={<PostIndividual />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;





