import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";
export const ShopContext = createContext(null);
const getDefaultcart = () => {
  let cart = {};

  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }

  cart[1] = 0;
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
    const gettotalCartAmount = () =>{
      let totalAmount = 0;
      for(const item in cartItems)
      {
          if(cartItems[item]>0)
          {
            let itemInfo = all_product.find((product)=>product.id===Number(item))
            totalAmount += itemInfo.new_price * cartItems[item];
          }
        }
          return totalAmount;
      };
    
          const getTotalCartItems =()=>{
            let totalItem =0;
            for(const item in cartItems){
                 if(cartItems[item]>0)
                 {
                   totalItem+= cartItems[item];
                 }
                      
            }
            return totalItem;
          }
     
    const contextValue = {getTotalCartItems,gettotalCartAmount, all_product, cartItems, addToCart, RemoveFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
