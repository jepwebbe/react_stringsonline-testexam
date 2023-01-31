import React from "react";
import { GridOne } from "../../Styles/GridOne";
import { MainStyled } from "../../Styles/Styled.Main";
import Footer from "../Partials/Footer/Footer";
import Header from "../Partials/Header/Header";
import Sidebar from "../Partials/Sidebar/Sidebar";
import { Page } from "../App/Layout/Page";

const OtherStrings = () => {
  return (
    <GridOne>
      <Page title="StringsOnline - Andre strenginstrumenter" description="Dit sted for strenge" />
      <Header />
      <Sidebar />
      <MainStyled>Main</MainStyled>
      <Footer />
    </GridOne>  )
}

export default OtherStrings