import React from "react";
import { Link } from "react-router-dom";
import './CartItem.css'
// import "./ShoesItem.css";

const CartItem = (product) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="cartItem">
        <div className="CartImgContainer" >
          <img
          className="cartImg"
          src={"../" + product.image}
          alt="vans product"
          />
        </div>
        <div className="cartTitle">{product.title}</div>
        <div className="cartPrice">{product.price}</div>
      </div>
      <hr/>
    </Link>
  );
};

export default CartItem;