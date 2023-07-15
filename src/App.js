import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <NavBar />
      <div className="body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pages" component={Pages} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:slug" component={SingleProduct} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/products?page=:number" component={Products} />
          <Route component={Error} />
        </Switch>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
