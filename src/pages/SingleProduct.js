import React, { Component } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import defaultAvatar from "../images/avatar-3.png";
import defaultProductImg from "../images/product5.jpg";
import review1 from "../images/review-1.png";
import review2 from "../images/review-2.png";
import review3 from "../images/review-3.png";
import ShopListImg from "../images/shoplist.jpg";

import { ProductContext } from "../context";

import classNames from "classnames";
import StarRatingComponent from "react-star-rating-component";

export default class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelect: "description",
      slug: this.props.match.params.slug,
      rating: 0,
    };
    //console.log(this.props);
  }
  static contextType = ProductContext;
  componentDidMount() {}
  isSelect = (s) => {
    this.setState({ isSelect: s });
  };
  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  render() {
    const { rating } = this.state;
    const { getProduct, addToCart, isPlus, isMinus, handleChange } =
      this.context;
    const product = getProduct(this.state.slug);
    if (!product) {
      return (
        <div className="error404">
          <Banner
            title="404"
            subtitle="No such product could be found"
            text="Oops! The product you are looking for does not exist. It might have been moved or deleted."
          >
            <Link to="/products" className="btn-primary">
              back to shop
            </Link>
          </Banner>
        </div>
      );
    }
    const {
      id,
      name,
      author,
      authorNationality,
      price,
      amount,
      text,
      sku,
      categories,
      tags,
      description,
      weight,
      dimensions,
      type,
      image,
      authorImage,
    } = product;

    let extraInfo;
    if (this.state.isSelect === "description") {
      extraInfo = <p className="extra-description">{description}</p>;
    } else if (this.state.isSelect === "additional information") {
      extraInfo = (
        <div className="additional-info">
          <div className="product-weight">
            Weight: <span>{weight}</span>
          </div>
          <div className="product-dimensions">
            Dimensions: <span>{dimensions}</span>
          </div>
          <div className="product-type">
            Type:
            <span>{type}</span>
          </div>
        </div>
      );
    } else if (this.state.isSelect === "review") {
      extraInfo = (
        <div className="review-comment-form">
          <div className="reply-title">
            <span className="r-title">
              Be the first to review “Wellness And Paradise”
            </span>
            <div className="star-rating">
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
          </div>
          <div className="from-group">
            <textarea
              className="comment-form comment-form-comment"
              placeholder="Your review"
              rows="8"
              columns="45"
            ></textarea>
            <input
              type="text"
              className="comment-form comment-form-author"
              placeholder="Name Surname"
            />
            <input
              type="email"
              className="comment-form comment-form-email"
              placeholder="Email"
            />
            <div className="comment-form-cookies-consent">
              <input
                id="comment-cookies"
                type="checkbox"
                className="comment-cookies"
              ></input>
              <label htmlFor="comment-cookies">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
          </div>
          <div className="form-submit btn-primary">Submit</div>
        </div>
      );
    }
    return (
      <>
        <Hero hero="hero productsHero">
          <img src={ShopListImg} alt="shop list" />
          <div className="title-inner">
            <h6 className="subtitle">PRODUCTS</h6>
            <h2 className="page-title">Shop List</h2>
          </div>
        </Hero>
        <div className="single-product-body">
          <div className="single-product-img">
            <img src={image || defaultProductImg} alt="product" />
          </div>
          <div className="single-product-info-wrapper">
            <div className="single-product-info">
              <div className="product-author">
                <Link to="/products">{`by ${author}`}</Link>
              </div>
              <div className="product-name">
                <h2>{name}</h2>
              </div>
              <div className="star-rating">
                <div className="star">
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                </div>
                <span className="reviews">(1 customer review)</span>
              </div>
              <div className="product-price">{`$${price}.00`}</div>
              <div className="product-text">{text}</div>
              <div className="quantity-amount-wrapper">
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
                <div
                  className="add-to-basket-btn btn-primary"
                  onClick={() => {
                    isPlus(id);
                    return addToCart(id);
                  }}
                >
                  Add To Basket
                </div>
              </div>
              <div className="product-meta">
                <span className="sku-wrapper">
                  SKU: <span>{sku}</span>
                </span>
                <span className="posted-in">
                  Categories: <span>{categories}</span>
                </span>
                <span className="tagged-as">
                  Tags: <span>{tags}</span>
                </span>
              </div>
            </div>
            <div className="single-author-holder">
              <div className="single-author-img">
                <Link to="/">
                  <img src={authorImage || defaultAvatar} alt="author" />
                </Link>
              </div>
              <div className="single-author-details">
                <div className="single-author-nationality">
                  {authorNationality}
                </div>
                <div className="single-author-name">
                  <Link to="/">{author}</Link>
                </div>
                <div className="single-author-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
            <div className="reviews-holder">
              <div className="review-holder">
                <div className="review-star-wrapper">
                  <AiFillStar className="star-icon review-star" />
                  <AiFillStar className="star-icon review-star" />
                  <AiFillStar className="star-icon review-star" />
                  <AiFillStar className="star-icon review-star black-star" />
                  <AiFillStar className="star-icon review-star black-star" />
                </div>
                <div className="review-description">
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea."
                  </p>
                </div>
                <div className="review-bottom">
                  <div className="review-bottom-img">
                    <img src={review1} alt="review" />
                  </div>
                  <span className="review-bottom-name">
                    Michael Lord - New York Times
                  </span>
                </div>
              </div>
              <div className="review-holder">
                <div className="review-star">
                  <AiFillStar className="star-icon review-star" />
                  <AiFillStar className="star-icon review-star" />
                  <AiFillStar className="star-icon review-star" />
                  <AiFillStar className="star-icon review-star" />
                  <AiFillStar className="star-icon review-star" />
                </div>
                <div className="review-description">
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea."
                  </p>
                </div>
                <div className="review-bottom">
                  <div className="review-bottom-img">
                    <img src={review2} alt="review 2" />
                  </div>
                  <span className="review-bottom-name">
                    Joanne Smith - Huffington Post
                  </span>
                </div>
              </div>
              <div className="review-holder">
                <div className="review-star">
                  <AiFillStar className="star-icon review-star" />
                  <AiFillStar className="star-icon review-star" />
                  <AiFillStar className="star-icon review-star black-star" />
                  <AiFillStar className="star-icon review-star black-star" />
                  <AiFillStar className="star-icon review-star black-star" />
                </div>
                <div className="review-description">
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea."
                  </p>
                </div>
                <div className="review-bottom">
                  <div className="review-bottom-img">
                    <img src={review3} alt="review 3" />
                  </div>
                  <span className="review-bottom-name">
                    Minnie Loyd - The Guardian
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="extra-info">
          <div className="categories">
            <ul>
              <li
                className={classNames("btn-primary", {
                  "in-filter": this.state.isSelect === "description",
                })}
                onClick={() => this.isSelect("description")}
              >
                description
              </li>
              <li
                className={classNames("btn-primary", {
                  "in-filter": this.state.isSelect === "additional information",
                })}
                onClick={() => this.isSelect("additional information")}
              >
                additional information
              </li>
              <li
                className={classNames("btn-primary", {
                  "in-filter": this.state.isSelect === "review",
                })}
                onClick={() => this.isSelect("review")}
              >
                review(0)
              </li>
            </ul>
          </div>
          <div className="extra-info-content">{extraInfo}</div>
        </div>
      </>
    );
  }
}
