import React from "react";
import Product from "../Product/Product";
import "../../css/Products/Products.css";

function Products({ products, addToCart }) {
  const productsUI = products.map((product) => (
    <Product product={product} key={product.id} addToCart={addToCart}></Product>
  ));
  return <div className="products-section">{productsUI}</div>;
}

export default Products;
