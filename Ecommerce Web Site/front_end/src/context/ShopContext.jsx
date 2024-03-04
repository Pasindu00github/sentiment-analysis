import React, { createContext, useState } from "react";

import all_product from "../components/Assets/all_product";
export const ShopContext = createContext(null);
const getDefaultcart = () => {
  let cart = {};

  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }

  cart[2] = 1;
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultcart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const RemoveFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { all_product, cartItems, addToCart, RemoveFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
