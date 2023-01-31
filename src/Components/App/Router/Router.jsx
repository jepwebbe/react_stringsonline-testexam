import React from "react";
import { Route, Routes } from "react-router-dom";
import Basses from "../../Pages/Basses";
import Guitars from "../../Pages/Guitars";
import Home from "../../Pages/Home/Home";
import { InstrumentDetails } from "../../Pages/InstrumentDetails";
import Keyboards from "../../Pages/Keyboards";
import OtherStrings from "../../Pages/OtherStrings";
import Terms from "../../Pages/Terms/Terms";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="terms" element={<Terms />} />
      <Route path="guitarer" element={<Guitars />} />
      <Route path="guitarer/:id" element={<InstrumentDetails />} />
      <Route path="basser" element={<Basses />} />
      <Route path="basser/:id" element={<InstrumentDetails />} />
      <Route path="keyboards" element={<Keyboards />} />
      <Route path="keyboards/:id" element={<InstrumentDetails />} />
      <Route path="andrestrenge" element={<OtherStrings />} />
      <Route path="andrestrenge/:id" element={<InstrumentDetails />} />

    </Routes>
  );
};

export default Router;
