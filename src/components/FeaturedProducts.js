import React, { Component } from "react";
import classNames from "classnames";
import { ProductContext } from "../context";
import Loading from "./Loading";
import Product from "./Product";

export default class FeaturedProducts extends Component {
  state = {
    inFilter: "All",
  };
  static contextType = ProductContext;

  inFilter = (s) => {
    this.setState({ inFilter: s });
  };

  render() {
    let { loading, featuredProducts: products } = this.context;
    let items = [];
    if (this.state.inFilter === "All") {
      items = products;
    } else if (this.state.inFilter === "Best Sellers") {
      items = products.filter(
        (product) => product.categories.indexOf("Best Sellers") !== -1
      );
    } else if (this.state.inFilter === "Fantasy") {
      items = products.filter(
        (product) => product.categories.indexOf("Fantasy") !== -1
      );
    } else if (this.state.inFilter === "History") {
      items = products.filter(
        (product) => product.categories.indexOf("History") !== -1
      );
    } else if (this.state.inFilter === "Art") {
      items = products.filter(
        (product) => product.categories.indexOf("Art") !== -1
      );
    } else if (this.state.inFilter === "Love Stories") {
      items = products.filter(
        (product) => product.categories.indexOf("Love Stories") !== -1
      );
    }
    return (
      <section className="featured-products">
        <div className="categories">
          <ul>
            <li
              className={classNames("btn-primary", {
                "in-filter": this.state.inFilter === "All",
              })}
              onClick={() => this.inFilter("All")}
            >
              All
            </li>
            <li
              className={classNames("btn-primary", {
                "in-filter": this.state.inFilter === "Best Sellers",
              })}
              onClick={() => this.inFilter("Best Sellers")}
            >
              Best Sellers
            </li>
            <li
              className={classNames("btn-primary", {
                "in-filter": this.state.inFilter === "Fantasy",
              })}
              onClick={() => this.inFilter("Fantasy")}
            >
              Fantasy
            </li>
            <li
              className={classNames("btn-primary", {
                "in-filter": this.state.inFilter === "History",
              })}
              onClick={() => this.inFilter("History")}
            >
              History
            </li>
            <li
              className={classNames("btn-primary", {
                "in-filter": this.state.inFilter === "Art",
              })}
              onClick={() => this.inFilter("Art")}
            >
              Art
            </li>
            <li
              className={classNames("btn-primary", {
                "in-filter": this.state.inFilter === "Love Stories",
              })}
              onClick={() => this.inFilter("Love Stories")}
            >
              Love Stories
            </li>
          </ul>
        </div>
        <div className="featured-products-center">
          {loading ? (
            <Loading />
          ) : (
            items.map((item) => {
              return <Product key={item.id} product={item} />;
            })
          )}
        </div>
      </section>
    );
  }
}
