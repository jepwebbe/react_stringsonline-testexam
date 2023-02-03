import React from "react";
import CheckoutForm from "./CheckoutForm";
import { StyledCheckout } from "./Styled.Checkout";

const Checkout = () => {
  return (
    <StyledCheckout>
      <h2>Kasse</h2>
      <CheckoutForm />
    </StyledCheckout>
  );
};

export default Checkout;
