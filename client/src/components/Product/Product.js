import React from "react";
import "../../css/Product/Product.css";

function Product({ product }) {
  return (
    <div className="product-section">
      <img src={product.imageURL} alt={product.id}></img>
      <div className="product-details">
        <p className="product-title">{product.title}</p>
        <p className="product-price">{`$ ${product.price}`}</p>
      </div>
      <button>Add To Cart</button>
    </div>
  );
}
export default Product;
