import React from "react";
import { GridOne } from "../../Styles/GridOne";
import { MainStyled } from "../../Styles/Styled.Main";
import Footer from "../Partials/Footer/Footer";
import Header from "../Partials/Header/Header";
import Sidebar from "../Partials/Sidebar/Sidebar";
import { Page } from "../App/Layout/Page";

const Guitars = () => {
  return (
    <GridOne>
      <Page title="StringsOnline - Guitarer" description="Dit sted for guitarer" />
      <Header />
      <Sidebar />
      <MainStyled>Main</MainStyled>
      <Footer />
    </GridOne>
  );
};

export default Guitars;