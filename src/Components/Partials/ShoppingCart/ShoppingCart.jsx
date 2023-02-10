import React from "react";
import { useShoppingCartStore } from "./useShoppingCart/useShoppingCart";
import { RespImg } from "../../../Styles/RespImg";
import { Link } from "react-router-dom";
import { StyledCart } from "./Styled.ShoppingCart";
import Dummycart from "./Dummycart";

const ShoppingCart = () => {
  const {
    cartItems,
    setDeleteItem,
    setEmptyCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCartStore();
  const returnAmount = (id) => {
    const itemAmount = cartItems.find((ci) => ci.id === id)?.amount;
    return itemAmount;
  };
  const formatPrice = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    currencyDisplay: "symbol",
  });

  return (
    <StyledCart>
      <h2>Din indkøbskurv</h2>
      <ul>
        {cartItems.map((item, ind) => (
          <li key={ind}>
            <RespImg src={item.image} alt={item.name} />
            <h3>{item.title}</h3>
            <div className="stockBox">
              <div className="quantity">
                <button
                  onClick={() =>
                    increaseCartQuantity(item.id, item.price, 1, item.title)
                  }
                >
                  +
                </button>
                <p>{item.amount}</p>
                <button
                  onClick={() =>
                    returnAmount(item.id) > 1
                      ? decreaseCartQuantity(item.id, item.price, 1)
                      : setDeleteItem(item.id)
                  }
                >
                  -
                </button>
              </div>
            </div>
            <p className="stockQuantity">{item.stock} på lager</p>

            <p>{formatPrice.format(item.amount * item.price)}</p>
            <button onClick={() => setDeleteItem(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <div className="proceed">
        <div className="totals">
          <div className="money">
            <p>BELØB</p>
            <div>
              <p>
                {formatPrice.format(
                  cartItems.reduce((a, b) => a + b.amount * b.price, 0)
                )}
              </p>
            </div>
            <p>prisen er inkl. moms</p>
          </div>
          <button onClick={() => setEmptyCart()}>RYD</button>
        </div>
        <button>
          <Link to="/kasse">TIL KASSEN</Link>
        </button>
        <Dummycart />
      </div>
    </StyledCart>
  );
};

export default ShoppingCart