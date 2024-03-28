import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "../../css/Products/Products.css";
import { Bounce, Fade, Rotate, Zoom } from "react-awesome-reveal";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/products";

function Products(props) {
  let i = 0;
  console.log(props);
  useEffect(() => {
    console.log("effect");
    props.fetchProducts();
  }, []);

  return (
    <div className="products-section">
      {props.products && props.products.length > 0
        ? props.products.map((product) => {
            i++;
            console.log(product);
            return (
              <Product
                product={product}
                key={product._id}
                addToCart={props.addToCart}
              ></Product>
            );
          })
        : "loading"}
    </div>
  );
}

export default connect(
  (state) => {
    return { products: state.products.filteredProducts };
  },
  { fetchProducts }
)(Products);
