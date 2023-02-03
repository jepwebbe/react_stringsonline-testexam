import React, { useEffect, useState } from "react";
import { MainStyled } from "../../../Styles/Styled.Main";
import appService from "../../App/Appservices/AppService";
import { Page } from "../../App/Layout/Page";
import ShoppingCart from "../../Partials/ShoppingCart/ShoppingCart";

const User = () => {
  const [order, setOrder] = useState("");
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
    <>
      <Page title="StringsOnline" description="Dit sted for instrumenter" />
      <MainStyled>
        <ShoppingCart />
      </MainStyled>
    </>
  );
};

export default User;
