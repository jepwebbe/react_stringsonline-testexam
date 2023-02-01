import React from "react";
import { GridTwo } from "../../../Styles/GridTwo";
import { MainStyled } from "../../../Styles/Styled.Main";
import { Page } from "../../App/Layout/Page";
import Login from "../../Login/Login";
import LoginCreate from "../../Login/LoginCreate";
import Footer from "../../Partials/Footer/Footer";
import Header from "../../Partials/Header/Header";
import Sidebar from "../../Partials/Sidebar/Sidebar";
import { StyledLoginPage } from "./LoginPage.Styled.js";

const LoginPage = () => {
  return (
    <GridTwo>
      <Page
        title="StringsOnline"
        description="Dit sted for instrumenter"
      />
      <Header />
      <Sidebar />
      <MainStyled>
        <StyledLoginPage>
          <h2>Log ind på StringsOnline</h2>
          <h3>Log ind på din brugerkonto her</h3>
          <Login forward="/bruger"/>
          <p>Ønsker du at ændre noget? Slet eller ret din brugerkonto her</p>
          <h3>Opret bruger</h3>
          <p>Har du ikke en bruger? Opret en ny brugerkonto</p>
          <LoginCreate />
        </StyledLoginPage>
      </MainStyled>
      <Footer />
    </GridTwo>
  );
};

export default LoginPage;
