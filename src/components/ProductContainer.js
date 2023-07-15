import React from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import { withProductConsumer } from "../context";
import Loading from "./Loading";

function ProductContainer({ context }) {
  const {
    loading,
    sortedProducts,
    products,
    currentProducts,
    productsPerPage,
  } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="product-container">
      <ProductList
        products={sortedProducts}
        currentProducts={currentProducts}
        productsPerPage={productsPerPage}
      />
      <ProductFilter products={products} />
    </section>
  );
}

export default withProductConsumer(ProductContainer);

/*import React from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import { ProductConsumer } from "../context";
import Loading from "./Loading";

export default function ProductsContainer() {
  return (
    <ProductConsumer>
      {(value) => {
        const { loading, sortedProducts, products } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            hello from products container
            <ProductFilter products={products} />
            <ProductList products={sortedProducts} />
          </div>
        );
      }}
    </ProductConsumer>
  );
}
*/
