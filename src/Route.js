import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Calculator from "./Calculator";
import Quote from "./Quote";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  );
};

const RoutesWrapper = () => {
  return <Router>{AppRoutes()}</Router>;
};

export default RoutesWrapper;
