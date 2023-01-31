import React from "react";
import { GridOne } from "../../../Styles/GridOne";
import { HeroStyled } from "./Styled.Hero";
import { MainStyled } from "../../../Styles/Styled.Main";
import Footer from "../../Partials/Footer/Footer";
import Header from "../../Partials/Header/Header";
import Sidebar from "../../Partials/Sidebar/Sidebar";
import Hero from "./Hero";
import { Page } from "../../App/Layout/Page";

const Home = () => {
  return (
    <GridOne>
      <Page title="Velkommen til StringsOnline" description="Dit sted for instrumenter" />
      <Header />
      <Sidebar />
      <Hero />
      <MainStyled>Main</MainStyled>
      <Footer />
    </GridOne>
  );
};

export default Home;
