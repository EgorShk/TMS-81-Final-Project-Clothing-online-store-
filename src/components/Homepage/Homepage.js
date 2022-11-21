import React from "react";
import "./Homepage.css";
import { products } from "../constants/productsArray";
import SingleProduct from "../Products/SingleProduct";

export const Homepage = () => {
  console.log(products);
  const productsFiltered = products.filter((product, index) => {
    if (index % 2 === 0) {
      product.index = index;
      return product;
    }
  });
  console.log(productsFiltered);
  return (
    <div className="homepage">
      <div className="containerHomepage">
        <div>
          <img src="./images/vansxstr.jpg" />
        </div>
          <div className='newProducts'> <h3 className="newProductText">Новинки</h3></div>

        <div className='products' >
          {productsFiltered.map((product, index) => (
            <div className="productsFlex">
              <SingleProduct
                image={product.image}
                title={product.name}
                price={product.price}
                id={product.index}
                key={product.index}
                //category={category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
