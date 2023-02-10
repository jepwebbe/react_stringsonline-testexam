import React, { useEffect, useState } from "react";
import useGetApiDataFromEndpoint from "../../../Hooks/useGetApiDataFromEndpoint";
import appService from "../../App/Appservices/AppService";
import { useShoppingCartStore } from "./useShoppingCart/useShoppingCart";

const Dummycart = () => {
  const { cartItems } = useShoppingCartStore();
  const [postCart, setPostCart] = useState();
  const [fetchedCart, setFetchedCart] = useState("");

  console.log("cartitems er " + cartItems.items);
  console.log("fetchedCart er " + fetchedCart);

  const addToCart = (item_id, quantity) => {
    const createCart = async () => {
      try {
        const result = await appService.Create("cart", {
          product_id: item_id,
          quantity: quantity,
        });
        setPostCart(result);
        console.log("post er kørt " + postCart);
      } catch (error) {
        console.error(error);
      }
    };
    createCart();
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.Get("cart");
        console.log("result er ", result.data)
        setFetchedCart(result.data.cartlines);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [postCart]);

  return (
    <div>
      <div>
        fetchedCart is{" "}
        {fetchedCart &&
          fetchedCart.map((item, i) => <li key={i}>{item.name}</li>)}
      </div>

      {cartItems &&
        cartItems.map((iitem, ii) => (
          <li key={ii}>Lokal cart is
            {iitem.title}
            <button onClick={() => addToCart(iitem.id, 1)}>Klik mig</button>
          </li>
        ))}
    </div>
  );
};

export default Dummycart;
