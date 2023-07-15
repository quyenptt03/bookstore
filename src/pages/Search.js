import React, { Component } from "react";

import SearchProduct from "../components/SearchProduct";
import ProductContext from "../context";

export default class Search extends Component {
  static contextType = ProductContext;
  render() {
    const { currentProducts, search } = this.context;
    if (!currentProducts) {
      return (
        <div className="empty-search">
          <p>No products were found matching your selection.</p>
        </div>
      );
    }
    return (
      <section className="search-page">
        <div className="search-result-title">
          Search results for: <span>{search}</span>
        </div>
        <div className="search-result-product">
          {currentProducts.map((product, index) => (
            <SearchProduct
              key={index}
              name={product.name}
              image={product.image}
            />
          ))}
        </div>
      </section>
    );
  }
}
//export default withRouter(Search);
