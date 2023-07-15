import React, { Component } from "react";
import CartItem from "../components/CartItem";
import Hero from "../components/Hero";
import ShopListImg from "../images/shoplist.jpg";

import { ProductContext } from "../context";

import { Link } from "react-router-dom";

export default class Cart extends Component {
  static contextType = ProductContext;

  componentDidMount() {
    this.context.getTotal();
  }

  render() {
    const { cart, total } = this.context;

    if (cart.length === 0) {
      return (
        <>
          <Hero hero="hero productsHero">
            <img src={ShopListImg} alt="shop list" />
            <div className="title-inner">
              <h2 className="page-title">Cart</h2>
            </div>
          </Hero>
          <div className="empty-cart-wrapper">
            <div className="empty-cart">
              <p>Your basket is currently empty.</p>
            </div>
            <Link to="/products">
              <span className="btn-primary">Return to shop</span>
            </Link>
          </div>
        </>
      );
    }
    return (
      <>
        <Hero hero="hero productsHero">
          <img src={ShopListImg} alt="shop list " />
          <div className="title-inner">
            <h2 className="page-title">Cart</h2>
          </div>
        </Hero>
        <section className="cart-items">
          <>
            <table>
              <thead className="cart-items-header">
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartItem, index) => {
                  return (
                    <CartItem
                      key={index}
                      name={cartItem.name}
                      image={cartItem.image}
                      price={cartItem.price}
                      product={cartItem}
                    />
                  );
                })}
              </tbody>
            </table>
          </>
        </section>
        <div className="totals">
          <h2 className="total-title">Basket Totals</h2>
          <table className="cart-total-table">
            <tbody>
              <tr className="cart-total">
                <th>Subtotal</th>
                <td className="subtotal">
                  <span className="subtotal-amount">${total}.00</span>
                </td>
              </tr>
              <tr className="shipping">
                <th>Shipping</th>
                <td className="shipping-price">
                  <span>$0.00</span>
                </td>
              </tr>
              <tr className="total-price">
                <th>Total</th>
                <td className="total">
                  <strong>${total}.00</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="checkout btn-primary">Proceed to checkout</div>
        </div>
      </>
    );
  }
}
