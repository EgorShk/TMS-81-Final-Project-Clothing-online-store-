import React from "react";
import ShoesSize from "../Size/ShoesSize";
import "./Item.css";
import { products } from "../constants/productsArray";
import { useParams } from "react-router-dom";

const Item = () => {
  const { id } = useParams();
  function addToCart(productID) {
    //localStorage.setItem('cart', JSON.stringify(productID))
    let cartProducts = JSON.parse(localStorage.getItem("cart"));

    if (Array.isArray(cartProducts)) {
      cartProducts.push(productID);
    } else {
      cartProducts = [productID];
    }

    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }

  return (
    <div className="productItem">
      <div className="containerImg">
        <img className="itemImg"  src={"." + products[id].image} />
      </div>

      <div className="itemDescription">
        <p className="itemModel">{products[id].name}</p>
        <p className="itemPrice">{products[id].price}</p>
        <ShoesSize />
        <button onClick={(e) => addToCart(id)}>Добавить в корзину</button>
        <p>
          БЕСПЛАТНАЯ ДОСТАВКА ОТ 100 РУБ <br />
          МОЖНО ВЕРНУТЬ В ТЕЧЕНИЕ 14 ДНЕЙ
        </p>
      </div>
    </div>
  );
};

export default Item;
