import React from "react";
import { MainStyled } from "../../../Styles/Styled.Main";
import { Page } from "../../App/Layout/Page";
import Login from "../../Login/Login";
import LoginCreate from "../../Login/LoginCreate";
import { StyledLoginPage } from "./LoginPage.Styled.js";

const LoginPage = () => {
  return (
    <>
      <Page
        title="StringsOnline"
        description="Dit sted for instrumenter"
      />
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
    </>
  );
};

export default LoginPage;
