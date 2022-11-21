import React from "react";
import { Link } from "react-router-dom";
import "./SingleProduct.css";
// import "./ShoesItem.css";

const SingleProduct = (product) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="shoesItem">
        <img
          className="shoesImg"
          src={"../" + product.image}
          alt="vans product"
        />

        <h3 className="title">{product.title}</h3>
        <p className="price">{product.price}</p>
      </div>
    </Link>
  );
};

export default SingleProduct;
