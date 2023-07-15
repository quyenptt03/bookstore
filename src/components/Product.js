import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/product1.jpg";
import PropTypes from "prop-types";

import { ProductContext } from "../context";
import { useContext } from "react";

export default function Product({ product }) {
  const { id, name, slug, author, image, price } = product;
  const context = useContext(ProductContext);
  const { addToCart, isPlus } = context;
  return (
    <div className="product">
      <div className="product-wrap">
        <div className="product-img">
          <img src={image || defaultImg} alt=" " className="product-img" />
        </div>
        <Link to={`/products/${slug}`}>
          <div className="overlay">
            <span className="add-to-basket" onClick={() => addToCart(id)}>
              <Link to="/products" onClick={() => isPlus(id)}>
                Add to basket
              </Link>
            </span>
          </div>
        </Link>
      </div>
      <div className="product-info">
        <div className="product-author">
          <Link to="/products">{author}</Link>
        </div>
        <div className="product-name">
          <Link to={`/products/${slug}`}>{name}</Link>
        </div>
        <div className="product-price">${price}.00</div>
      </div>
    </div>
  );
}

Product.PropTypo = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
