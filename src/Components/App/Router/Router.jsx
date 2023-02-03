import React from "react";
import { Route, Routes } from "react-router-dom";
import Basses from "../../Pages/Basses";
import BrandDetailsInstrument from "../../Pages/BrandDetailsInstrument";
import Brands from "../../Pages/Brands";
import BrandsDetails from "../../Pages/BrandsDetails";
import Checkout from "../../Pages/Checkout";
import Home from "../../Pages/Home/Home";
import { InstrumentDetails } from "../../Pages/InstrumentDetails";
import { InstrumentGroupDetails } from "../../Pages/InstrumentGroupDetails";
import LoginPage from "../../Pages/Login/LoginPage";
import SearchResults from "../../Pages/SearchResults";
import Terms from "../../Pages/Terms/Terms";
import User from "../../Pages/User/User";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/guitarer/:id" element={<InstrumentGroupDetails />} />
      <Route path="/guitarer/:id/:id" element={<InstrumentDetails />} />
      <Route path="/basser/:id" element={<InstrumentGroupDetails />} />
      <Route path="/basser/:id/:id" element={<InstrumentDetails />} />
      <Route path="/keyboards/:id" element={<InstrumentGroupDetails />} />
      <Route path="/keyboards/:id/:id" element={<InstrumentDetails />} />
      <Route path="/andrestrenge/:id" element={<InstrumentGroupDetails />} />
      <Route path="/andrestrenge/:id/:id" element={<InstrumentDetails />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/brands/:id" element={<BrandsDetails />} />
      <Route path="/brands/:id/:id" element={<BrandDetailsInstrument />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/bruger" element={<User />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/kasse" element={<Checkout />} />



    </Routes>
  );
};

export default Router;
