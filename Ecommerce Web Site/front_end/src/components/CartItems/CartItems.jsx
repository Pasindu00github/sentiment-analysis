import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, RemoveFromCart } = useContext(ShopContext);

  // console.log(all_product);

  console.log(cartItems);

  /* all_product.map((e) => {
    console.log(e);
  }); */

  return (
    <div className="cartitems">
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => {
                    RemoveFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default CartItems;
