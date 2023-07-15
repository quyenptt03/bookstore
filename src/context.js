import React, { Component } from "react";
import items from "./data";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    products: [],
    paginationProducts: [],
    sortedProducts: [],
    featuredProducts: [],
    top5Products: [],
    cart: [],
    total: 0,
    loading: true,
    categories: "all",
    tags: "",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    search: "",
    currentPage: 1,
    productsPerPage: 12,
    currentProducts: [],
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }
  // getData
  componentDidMount() {
    // this.getData
    let products = this.formatData(items);
    let featuredProducts = products.filter(
      (product) => product.featured === true
    );
    let top5Products = products.filter((product) => product.top5 === true);
    let maxPrice = Math.max(...products.map((item) => item.price));
    this.setState({
      products,
      featuredProducts,
      top5Products,
      sortedProducts: products,
      loading: false,
      price: maxPrice,
      maxPrice,
    });
    this.getCurrentProducts();
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let image = item.images;
      let authorImage = item.authorImages;

      let product = { ...item.fields, image, authorImage, id };
      return product;
    });
    return tempItems;
  }

  getProduct = (slug) => {
    let tempProduct = [...this.state.products];
    const product = tempProduct.find((product) => product.slug === slug);
    return product;
  };
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(
      {
        [name]: value,
      },
      this.filterProducts
    );
  };
  onFilterByCategories = (event) => {
    const categories = event.target.textContent.toLowerCase();
    this.setState(
      {
        categories,
      },
      this.filterProducts
    );
  };
  onFilterByTags = (event) => {
    const tags = event.target.textContent;
    this.setState({ tags }, this.filterProducts);
  };
  onKeyUp = (event) => {
    if (event.keyCode === 13) {
      // Enter Key
      let search = event.target.value;
      search = search.trim();
      this.setState(
        {
          search: event.target.value,
        },
        this.filterProducts
      );
    }
  };
  filterProducts = () => {
    let { products, price, minPrice, maxPrice, search, categories, tags } =
      this.state;
    let tempProducts = [...products];
    price = parseInt(price);
    // filter by price
    tempProducts = tempProducts.filter((product) => product.price <= price);
    // filter by search
    if (search !== "") {
      tempProducts = tempProducts.filter(
        (product) =>
          product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    } else if (search === "") {
      tempProducts = tempProducts;
    }
    // filter by categories
    if (categories !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.categories.toLowerCase().indexOf(categories) !== -1;
      });
    } else {
      tempProducts = tempProducts;
    }
    // filter by tags
    if (tags !== "") {
      tempProducts = tempProducts.filter((product) => {
        return product.tags.indexOf(tags) !== -1;
      });
    }
    // change state
    this.setState({
      currentProducts: tempProducts,
    });
  };
  getCurrentProducts() {
    // get current products
    const { currentPage, productsPerPage } = this.state;
    let products = this.formatData(items);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    this.setState({ currentProducts });
  }
  // change page
  handleClick = (pageNumber) => {
    this.setState({ currentPage: pageNumber }, this.getCurrentProducts);
  };

  addToCart = (id) => {
    let { products, cart } = this.state;
    let tempProducts = [...products];
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = tempProducts.filter((product) => {
        return product.id === id;
      });
      this.setState({ cart: [...cart, ...data] });
      this.getTotal();
    }
  };
  isPlus = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        item.amount += 1;
      }
    });
    this.setState({ cart });
    this.getTotal();
  };
  isMinus = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        item.amount === 1 ? (item.amount = 1) : (item.amount -= 1);
      }
    });
    this.setState({ cart });
    this.getTotal();
  };
  onDeleteProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart });
      this.getTotal();
    }
  };
  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.amount;
    }, 0);
    this.setState({ total: res });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          handleChange: this.handleChange,
          onFilterByCategories: this.onFilterByCategories,
          onFilterByTags: this.onFilterByTags,
          onKeyUp: this.onKeyUp,
          addToCart: this.addToCart,
          isPlus: this.isPlus,
          isMinus: this.isMinus,
          onDeleteProduct: this.onDeleteProduct,
          getTotal: this.getTotal,
          handleClick: this.handleClick,
          getCurrentProducts: this.getCurrentProducts,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export function withProductConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ProductConsumer>
        {(value) => <Component {...props} context={value} />}
      </ProductConsumer>
    );
  };
}

export { ProductConsumer, ProductContext, ProductProvider };
