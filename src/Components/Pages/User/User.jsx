import React, { useEffect, useState } from "react";
import { GridTwo } from "../../../Styles/GridTwo";
import { MainStyled } from "../../../Styles/Styled.Main";
import appService from "../../App/Appservices/AppService";
import { Page } from "../../App/Layout/Page";
import Footer from "../../Partials/Footer/Footer";
import Header from "../../Partials/Header/Header";
import ShoppingCart from "../../Partials/ShoppingCart/ShoppingCart";
import Sidebar from "../../Partials/Sidebar/Sidebar";

const User = () => {
    const [order, setOrder] = useState("");
    console.log("bruger" + order)
    useEffect(() => {
      const getData = async () => {
    try {

          const result = await appService.Get("orders");
          setOrder(result.data);
        } catch (error) {
          console.error(error);
        } 
      };
      getData();
    }, []);
  return (
    <GridTwo>
      <Page
        title="StringsOnline"
        description="Dit sted for instrumenter"
      />
      <Header />
      <Sidebar />
      <MainStyled>
        <ShoppingCart />
      </MainStyled>
      <Footer />
    </GridTwo>
  );
};

export default User;
