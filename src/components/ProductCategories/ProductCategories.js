import React from "react";
import "./ProductCategories.css";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  return (
    <div className="containerProductCategories">
      <div className="shoes" category="shoes">
        <Link to="/products/shoes">
          <img src="./images/shoes.jpg" />
        </Link>
      </div>
      <div className="clothing" category="clothing">
        <Link to="/products/clothing">
          <img src="./images/clothing.jpg" />
        </Link>
      </div>
      <div className="accessories" category="accessories">
        <Link to="/products/accessories">
          <img src="./images/accessories.jpg" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCategories;
