import React, { useState } from "react";
import "../../css/Product/Product.css";
import Modal from "react-modal";

function Product({ product, addToCart }) {
  const [toggleModal, setToggelModal] = useState(false);
  const openModal = () => {
    setToggelModal(true);
  };
  const closeModal = () => {
    setToggelModal(false);
  };
  return (
    <div className="product-section">
      <img src={product.imageURL} alt={product.id} onClick={openModal}></img>
      <div className="product-details">
        <p className="product-title">{product.title}</p>
        <p className="product-price">{`$ ${product.price}`}</p>
      </div>
      <button
        onClick={() => {
          addToCart(product);
        }}
      >
        Add To Cart
      </button>
      <Modal isOpen={toggleModal} onRequestClose={closeModal}>
        <div className="product-modal">
          <span className="close-icon close-modal-icon" onClick={closeModal}>
            &times;
          </span>
          <img src={product.imageURL} alt={product.title}></img>
          <p>{product.title}</p>
          <p>{product.desc}</p>
          <p>
            {product.size.map((size, index) => (
              <span key={index}>{`${size}, `}</span>
            ))}
          </p>
          <p>{product.price}</p>
        </div>
      </Modal>
    </div>
  );
}
export default Product;
