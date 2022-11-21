import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage/Homepage";
import Item from "./components/Item/Item";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <div className="appWrapper">
      <Header />
      <div className="appWrapperContent">
        <Routes>
          <Route path="/productCategories" element={<ProductCategories />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products/:cat" element={<Products />} />
          <Route path="/product/:id" element={<Item />} />
          <Route path="/" element={<Homepage />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
