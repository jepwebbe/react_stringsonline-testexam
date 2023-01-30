import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Terms from "../../Pages/Terms/Terms";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="terms" element={<Terms />} />
    </Routes>
  );
};

export default Router;
