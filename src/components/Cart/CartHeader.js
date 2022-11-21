import React from "react";
import "./CartHeader.css";
const CartHeader = () => {
  return (
   
      <div className="cartContainer">
        <div className="cartHeader" >
          <div> <h3 className="cartDescription">Описание</h3></div>
          <div><h3 className="cartPriceHeader">Цена</h3></div>
        </div>
        <hr/>
      </div>
  
  );
};

export default CartHeader;