import React, { useState } from "react";
import "../../css/Product/Product.css";
import Modal from "react-modal";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActionCreators";
import { words } from "../../static";

function Product(props) {
  const [toggleModal, setToggelModal] = useState(false);
  const openModal = () => {
    setToggelModal(true);
  };
  const closeModal = () => {
    setToggelModal(false);
  };
  return (
    <div className="product-section">
      <img
        src={props.product.imageURL}
        alt={props.product.id}
        onClick={openModal}
      ></img>
      <div className="product-details">
        <p className="product-title">{props.product.title}</p>
        <p className="product-price">{`$ ${props.product.price}`}</p>
      </div>
      <button
        onClick={() => {
          props.addToCart(props.product);
        }}
      >
        {words.addToCartBtn}
      </button>
      <Modal isOpen={toggleModal} onRequestClose={closeModal}>
        <div className="product-modal">
          <span className="close-icon close-modal-icon" onClick={closeModal}>
            &times;
          </span>
          <img src={props.product.imageURL} alt={props.product.title}></img>
          <p>{props.product.title}</p>
          <p>{props.product.desc}</p>
          <p>
            {props.product.size.map((size, index) => (
              <span key={index}>{`${size}, `}</span>
            ))}
          </p>
          <p>{props.product.price}</p>
        </div>
      </Modal>
    </div>
  );
}
export default connect(null, { addToCart })(Product);
