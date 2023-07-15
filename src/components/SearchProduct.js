import React from "react";
import { Link } from "react-router-dom";

export default function SearchProduct({ product }) {
  const { name, image } = product;
  return (
    <div className="search-product">
      <div className="search-product-img">
        <img src={image} alt="" />
      </div>
      <div className="search-product-details">
        <div className="search-product-title">
          <Link to="/">{name}</Link>
        </div>
        <div className="search-product-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi…
          </p>
        </div>
      </div>
    </div>
  );
}
