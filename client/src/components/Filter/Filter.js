import React, { useState } from "react";
import "../../css/Filter/Filter.css";
import { connect } from "react-redux";
import { filterProducts } from "../../store/actions/products";

function Filter(props) {
  const [size, setSize] = useState("ALL");
  const [order, setOrder] = useState("latest");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.filterProducts(size, order, props.products);
  };

  return (
    <div className="filter-section">
      <h2 className="filter-section-header">Filter</h2>
      <div className="filter-body">
        <div className="Result-Number">
          Number Of Products{" "}
          {props.filteredProducts ? props.filteredProducts.length : "Loading"}
        </div>
        <form className="filter-form">
          <div className="filter-types">
            <h4>Size</h4>
            <select value={size} onChange={handleSizeChange}>
              <option value="ALL">ALL</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
          <div className="filter-order">
            <h4>Order</h4>
            <select value={order} onChange={handleOrderChange}>
              <option value="latest">Latest</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
          </div>
          <button className="btn2 filter-btn" onClick={handleSubmit}>
            Filter
          </button>
        </form>
      </div>
    </div>
  );
}

export default connect(
  (state) => {
    return {
      products: state.products.products,
      filteredProducts: state.products.filteredProducts,
      // size: state.products.size,
      // order: state.products.order,
    };
  },
  { filterProducts }
)(Filter);
