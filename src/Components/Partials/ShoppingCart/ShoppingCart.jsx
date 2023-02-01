import React from "react";
import { useShoppingCartStore } from "./useShoppingCart/useShoppingCart";
import styled from "styled-components";

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

  return (
    <CartStyled>
      <ul>
        {cartItems.map((item, ind) => (
          <li key={ind}>
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
            <p>    stk {item.name} til {item.price} stk, i alt{" "}
              {item.amount * item.price}
            </p>
            <button onClick={() => setDeleteItem(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <p>
        Pris i alt{" "}
        <span>
          {cartItems.reduce((a, b) => a + b.amount * b.price, 0) + "kr"}
        </span>
      </p>
      <button onClick={() => setEmptyCart()}>Tøm kurven</button>
    </CartStyled>
  );
};

const CartStyled = styled.article`
  width: 400px;
  height: 500px;
  border: 1px solid ${props => props.theme.colors.theDarkGreen};
  margin: 0 auto;
  ul {
    padding-left: 0;    
    li {
    display: flex;
    padding: 1rem;
    p {
        margin: 0;
    }
    button {
        line-height: 1;
        height: 100%;
    }
    button:last-of-type {
        margin-left: auto;
    }
  }}
`;
export default ShoppingCart;
