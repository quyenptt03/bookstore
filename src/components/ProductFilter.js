import React, { useContext } from "react";
import { FaDribbble, FaFlickr, FaPinterestP } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";
import { ProductContext } from "../context";

import Loading from "./Loading";

import { Link } from "react-router-dom";

const getUnique = (item, value) => {
  return [...new Set(item.map((item) => item[value]))];
};
export default function ProductFilter({ products }) {
  const context = useContext(ProductContext);
  const {
    handleChange,
    onKeyUp,
    onFilterByCategories,
    onFilterByTags,
    loading,
    categories,
    price,
    minPrice,
    maxPrice,
    search,
    top5Products,
  } = context;

  return (
    <div className="filter-container">
      <div className="filter-center">
        {/*search */}
        <div className="filter-search">
          <input type="text" placeholder="Search" onKeyUp={onKeyUp}></input>
          <button type="submit">
            <GoSearch className="filter-search-btn" />
          </button>
        </div>
        {/*end of search */}
        {/*product price*/}
        <div className="form-group">
          <span className="filter-price-title">Filter by price</span>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="price">Price: $0 - ${price}</label>
        </div>
        {/*end of product price*/}
        <div className="separator">
          <span className="icon-part"></span>
          <span className="separator-icon">❦</span>
          <span className="icon-part"></span>
        </div>
        {/*top 5 products */}
        <div className="top5-products-wrapper">
          <div className="top5-products-title title">Top 5 of the week</div>
          <div className="top5-products">
            {loading ? (
              <Loading />
            ) : (
              top5Products.map((item) => {
                return (
                  <div className="top-5-product" key={item.id}>
                    <Link to={`/products/${item.slug}`}>
                      <img
                        src={item.image}
                        alt=""
                        className="top5-product-img"
                      />
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
        {/*end of top 5 products */}
        <div className="separator">
          <span className="icon-part"></span>
          <span className="separator-icon">❦</span>
          <span className="icon-part"></span>
        </div>
        {/*categories filter */}
        <div className="categories-filter">
          <div className="categories-filter-title title">Categories</div>
          <ul className="categories-filter-products">
            <li
              className="categories-filter-item"
              onClick={onFilterByCategories}
            >
              ALL
            </li>
            <li
              className="categories-filter-item"
              onClick={onFilterByCategories}
            >
              ACTION
            </li>
            <li
              className="categories-filter-item"
              onClick={onFilterByCategories}
            >
              ART
            </li>
            <li
              className="categories-filter-item"
              onClick={onFilterByCategories}
            >
              BEST SELLERS
            </li>
            <li
              className="categories-filter-item"
              onClick={onFilterByCategories}
            >
              DESIGN
            </li>
            <li
              className="categories-filter-item"
              onClick={onFilterByCategories}
            >
              FANTASY
            </li>
            <li
              className="categories-filter-item"
              onClick={onFilterByCategories}
            >
              HISTORY
            </li>
            <li
              className="categories-filter-item"
              onClick={onFilterByCategories}
            >
              HOME
            </li>
            <li
              className="categories-filter-item"
              onClick={onFilterByCategories}
            >
              LOVE STORIES
            </li>
            <li
              className="categories-filter-item"
              onClick={onFilterByCategories}
            >
              NEW
            </li>
          </ul>
        </div>
        {/*end of categories filter */}
        <div className="separator">
          <span className="icon-part"></span>
          <span className="separator-icon">❦</span>
          <span className="icon-part"></span>
        </div>
        <div className="email-subscribe">
          <div className="title">Get on the list</div>
          <div className="email">
            <input type="text" placeholder="Email" />
            <div className="subscribe btn-primary">Subscribe</div>
          </div>
        </div>
        <div className="separator">
          <span className="icon-part"></span>
          <span className="separator-icon">❦</span>
          <span className="icon-part"></span>
        </div>
        {/*tags filter */}
        <div className="tags-filter">
          <div className="title">Tags</div>
          <div className="tags-filter-items">
            <div className="tag-item" onClick={onFilterByTags}>
              Adventure
            </div>
            <span>, </span>
            <div className="tag-item" onClick={onFilterByTags}>
              Bestseller
            </div>
            <span>, </span>
            <div className="tag-item" onClick={onFilterByTags}>
              Biography
            </div>
            <span>, </span>
            <div className="tag-item" onClick={onFilterByTags}>
              Design
            </div>
            <span>, </span>
            <div className="tag-item" onClick={onFilterByTags}>
              Fiction
            </div>
            <span>, </span>
            <div className="tag-item" onClick={onFilterByTags}>
              New
            </div>
            <span>, </span>
            <div className="tag-item" onClick={onFilterByTags}>
              Novel
            </div>
            <span>, </span>
            <div className="tag-item" onClick={onFilterByTags}>
              Pulitzer
            </div>
            <span>, </span>
          </div>
        </div>
        {/*end of tags filter */}
        <div className="separator">
          <span className="icon-part"></span>
          <span className="separator-icon">❦</span>
          <span className="icon-part"></span>
        </div>
        <div className="instagram">
          <div className="title">Instagram</div>
        </div>
        <div className="separator">
          <span className="icon-part"></span>
          <span className="separator-icon">❦</span>
          <span className="icon-part"></span>
        </div>
        <div className="social">
          <div className="title">Social</div>
          <div className="social-icons">
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
            <a href="http://flickr.com/">
              <FaFlickr className="social-icon" />
            </a>
            <a href="https://pinterest.com/">
              <FaPinterestP className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
