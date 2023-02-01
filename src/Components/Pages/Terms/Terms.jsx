import React from "react";
import { GridTwo } from "../../../Styles/GridTwo";
import { MainStyled } from "../../../Styles/Styled.Main";
import { Page } from "../../App/Layout/Page";
import Footer from "../../Partials/Footer/Footer";
import Header from "../../Partials/Header/Header";
import Sidebar from "../../Partials/Sidebar/Sidebar";

const Terms = () => {
  return (
    <GridTwo>
      <Page title="StringsOnline - Forretningsbetingelser" description="Dit sted for guitarer" />
      <Header />
      <Sidebar />
      <MainStyled>Terms</MainStyled>
      <Footer />
    </GridTwo>  )
}

export default Terms