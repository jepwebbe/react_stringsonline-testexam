import React from "react";
import { StyledCheckout } from "./Styled.Checkout";

const Checkout = () => {
  return (
    <StyledCheckout>
      <h2>Kasse</h2>
      <form>
        <div>
          <h3>Fakturerings- & leveringsadresse</h3>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <div>
          <h3>Email & telefon</h3>
          <input type="text" /><input type="text" />
        </div>
        <div>
          <h3>Betalingsmetode</h3>
          
        </div>
      </form>
    </StyledCheckout>
  );
};

export default Checkout;
