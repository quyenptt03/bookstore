import React from "react";
import Product from "./Product";
import Pagination from "./Pagination";

import { ProductContext } from "../context";
import { useContext } from "react";

export default function ProductList({
  products,
  currentProducts,
  productsPerPage,
}) {
  const context = useContext(ProductContext);
  const { handleClick } = context;
  if (currentProducts.length === 0) {
    return (
      <div className="empty-search">
        <p>No products were found matching your selection.</p>
      </div>
    );
  }
  return (
    <section className="products-list">
      <div className="show-option">
        <span className="show-results-count">
          Showing {currentProducts[0].id}-
          {currentProducts[currentProducts.length - 1].id} of {products.length}{" "}
          results
        </span>
        <div className="sort-by">
          <form className="sort-product">
            <select
              name="sort-products"
              className="sort-products"
              id="sort-products"
            >
              <option value="Sort by Latest" className="select-option">
                Sort by Latest
              </option>
              <option value="Sort by Popularity" className="select-option">
                Sort by Popularity
              </option>
              <option value="Sort by Average Rating" className="select-option">
                Sort by Average Rating
              </option>
              <option
                value="Sort by Price: Low to High"
                className="select-option"
              >
                Sort by Price: Low to High
              </option>
              <option
                value="Sort by Price: High to Low"
                className="select-option"
              >
                Sort by Price: High to Low
              </option>
            </select>
          </form>
        </div>
      </div>
      <div className="filter-products-center">
        {currentProducts.map((item) => {
          return <Product key={item.id} product={item} />;
        })}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        handleClick={handleClick}
      />
    </section>
  );
}
