import React from "react";
import Hero from "../components/Hero";
import ShopListImg from "../images/shoplist.jpg";
import ProductContainer from "../components/ProductContainer";

export default function Products() {
  return (
    <>
      <Hero hero="hero productsHero">
        <img src={ShopListImg} alt="shop list" />
        <div className="title-inner">
          <h6 className="subtitle">PRODUCTS</h6>
          <h2 className="page-title">Shop List</h2>
        </div>
      </Hero>
      <ProductContainer />
    </>
  );
}
