import React from "react";
import SingleProduct from "./SingleProduct";
import { products } from "../constants/productsArray";
import "./Products.css";
import { useParams } from "react-router-dom";

const Products = () => {
  const { cat } = useParams();
  const filteredCategory = products.filter((product, index) => {
    // if (product.category === category ) {
    //   return value;
    // }
    product.index = index;
    return product.category === cat;
  });
  return (
    <div className="containerProducts">
      <div className="products">
        {!filteredCategory.length ? (
          <h1>Нет товаров</h1>
        ) : (
          filteredCategory.map((item, index) => (
            <div className="product">
              <SingleProduct
                image={item.image}
                title={item.name}
                price={item.price}
                id={item.index}
                key={item.index}
                //category={category}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;

