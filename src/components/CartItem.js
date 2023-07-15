import React from "react";
import { IoMdClose } from "react-icons/io";

import { ProductContext } from "../context";
import { useContext } from "react";

import { Link } from "react-router-dom";

export default function CartItem({ product }) {
  const { id, name, image, price, slug, amount } = product;
  const context = useContext(ProductContext);
  const { isPlus, isMinus, onDeleteProduct, handleChange } = context;
  return (
    <tr className="cart-item">
      <td>
        <IoMdClose className="delete" onClick={() => onDeleteProduct(id)} />
      </td>
      <td>
        <div className="cart-product">
          <div className="cart-item-img">
            <img src={image} alt="" />
          </div>
          <Link to={`/products/${slug}`}>
            <div className="cart-item-name">
              <span>{name}</span>
            </div>
          </Link>
        </div>
      </td>
      <td>
        <div className="cart-item-price">
          <span>{price}.00</span>
        </div>
      </td>
      <td>
        <div className="cart-item-quantity">
          <div className="quantity-input">
            <label htmlFor="quantity-amount" className="quantity-title" />
            <div className="quantity-btn">
              <span className="minus-btn" onClick={() => isMinus(id)} />
              <input
                className="quantity-amount"
                value={amount}
                id="quantity-amount"
                type="text"
                readOnly=""
                onChange={handleChange}
              />
              <span className="plus-btn" onClick={() => isPlus(id)} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="total-item">
          <span>{price * amount}.00</span>
        </div>
      </td>
    </tr>
  );
}
