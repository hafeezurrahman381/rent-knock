import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SignUp from "./SignUp"; // Correct import
import Login from "./Login"; // Correct import
import ForgotPin from "./ForgotPin"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<ForgotPin />} />
      </Routes>
    </Router>
  );
}

export default App;


