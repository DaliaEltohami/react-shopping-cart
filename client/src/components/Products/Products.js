import React, { useEffect } from "react";
import Product from "../Product/Product";
import "../../css/Products/Products.css";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/productsActionCreators";

function Products(props) {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  return (
    <div className="products-section">
      {props.products && props.products.length > 0
        ? props.products.map((product) => {
            return <Product product={product} key={product._id}></Product>;
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
