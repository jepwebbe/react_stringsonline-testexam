import React from "react";
import { GridOne } from "../../Styles/GridOne";
import { MainStyled } from "../../Styles/Styled.Main";
import Footer from "../Partials/Footer/Footer";
import Header from "../Partials/Header/Header";
import Sidebar from "../Partials/Sidebar/Sidebar";
import { Page } from "../App/Layout/Page";

const Keyboards = () => {
  return (
    <GridOne>
      <Page title="StringsOnline - Keyboards" description="Dit sted for keyboards" />
      <Header />
      <Sidebar />
      <MainStyled>Main</MainStyled>
      <Footer />
    </GridOne>  )
}

export default Keyboards