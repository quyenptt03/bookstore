import React, { Component } from "react";
import logo from "../images/logo.png";
import { IoIosMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { GrTwitter } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
import { FaDribbble } from "react-icons/fa";
import { Link } from "react-router-dom";

import Login from "./Login";

import { ProductContext } from "../context";

export default class NavBar extends Component {
  static contextType = ProductContext;
  state = {
    isOpen: false,
    isSearch: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  isSearch = () => {
    this.setState({ isSearch: !this.state.isSearch });
  };
  render() {
    const { cart, total } = this.context;
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img className="logo" src={logo} alt="Book Store" />
            </Link>
            <div>
              <Link to="/cart" className="cart-link cart-link-btn">
                <button type="button" className="nav-btn cart-btn">
                  <AiOutlineShopping className="nav-icon" />
                  <span className="amount">{cart.length}</span>
                  <span className="total-price">${total}.00</span>
                </button>
              </Link>
              <button
                type="button"
                className="nav-btn menu-btn"
                onClick={this.handleToggle}
              >
                <IoIosMenu className="nav-icon" />
              </button>
            </div>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/products">Shop</Link>
            </li>
            <li className="nav-btn-wrapped">
              <div className="btn-wrapped">
                <Link to="/cart" className="cart-link">
                  <button type="button" className="nav-btn cart-btn">
                    <AiOutlineShopping className="nav-icon" />
                    <span className="amount">{cart.length}</span>
                    <span className="total-price">${total}.00</span>
                  </button>
                </Link>
                <button
                  type="button"
                  className="nav-btn search-btn"
                  onClick={this.isSearch}
                >
                  <IoIosSearch className="nav-icon" />
                </button>
                <label htmlFor="side-login-menu" className="nav-btn">
                  <IoIosMenu className="nav-icon" />
                </label>
                <form className="form-input">
                  <div
                    className={
                      this.state.isSearch
                        ? "search-box show-search-box"
                        : "search-box"
                    }
                  >
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                      <Link to="/search">GO</Link>
                    </button>
                  </div>
                </form>
              </div>
              <input
                type="checkbox"
                hidden
                name=""
                className="login-input"
                id="side-login-menu"
              />
              <label htmlFor="side-login-menu" className="cover"></label>
              <div className="login-menu">
                <label htmlFor="side-login-menu" className="close-icon-input">
                  <IoMdClose className="close-icon icon"></IoMdClose>
                </label>
                <div className="login-menu-inner">
                  <Link to="/">
                    <img className="logo" src={logo} alt="Book Store" />
                  </Link>
                  <div className="login-menu-location">
                    <Link to="/">
                      <MdLocationOn className="icon" />
                      <span className="location">1942 Amsterdam Ave NY</span>
                    </Link>
                  </div>
                  <div className="login-menu-phone">
                    <Link to="/">
                      <FaPhoneAlt className="icon" />
                      <span className="phone">(212) 862-3680</span>
                    </Link>
                  </div>
                  <div className="login-menu-mail">
                    <Link to="/">
                      <GoMail className="icon" />
                      <span className="mail">
                        chapterone@qodeinteractive.com
                      </span>
                    </Link>
                  </div>
                  <Login />
                  <div className="social-icons-login">
                    <a href="https://twitter.com/">
                      <GrTwitter className="social-icon icon" />
                    </a>
                    <a href="https://www.instagram.com/">
                      <GrInstagram className="social-icon icon" />
                    </a>
                    <a href="http://facebook.com">
                      <GrFacebookOption className="social-icon icon" />
                    </a>
                    <a href="https://dribbble.com/">
                      <FaDribbble className="social-icon icon" />
                    </a>
                  </div>
                  <div className="sale-text">
                    <span>
                      Free Shipping <br /> For Orders over 50%
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
