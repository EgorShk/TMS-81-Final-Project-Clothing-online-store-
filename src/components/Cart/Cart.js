import React from "react";
//import SingleProduct from "../Products/SingleProduct";
import "./Cart.css";
import { products } from "../constants/productsArray";
import CartItem from "./CartItem";
import CartHeader from "./CartHeader";

const Cart = () => {
  let cartProducts = JSON.parse(localStorage.getItem("cart"));

  let filteredCart = cartProducts
    ? products.filter((product, index) => {
        return cartProducts.includes(index.toString());
      })
    : Array();

  return (
    <div className="cart">
      {filteredCart.length ? <CartHeader /> : <div className="cartEmpty">Ваша корзина пуста.</div>}
      {filteredCart.map((item, index) => (
        <div className="productsFlex">
          <CartItem
            image={item.image}
            title={item.name}
            price={item.price}
            id={item.index}
            key={item.index}
            //category={category}
          />
        </div>
      ))}
      {/*`<img src='${product.image}' <li>${product.name}</li> <li></li> <li>${product.price}</li> <li>${1}</li>`*/}
    </div>
  );
};

export default Cart;
