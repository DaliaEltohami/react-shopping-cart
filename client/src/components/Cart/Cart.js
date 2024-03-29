import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkout from "../Checkout/Checkout";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/cartActionCreators";

function Cart(props) {
  const [checkout, setCheckout] = useState(false);
  return (
    <div className="cart-section">
      <h2 className="cart-header">
        Cart Items:
        {props.cartItems.reduce((acc, item) => {
          return acc + item.qty;
        }, 0)}
      </h2>

      <div className="cart-items">
        <Fade cascade direction="up" duration={500}>
          {props.cartItems.map((item) => (
            <div className="cart-item" key={item._id}>
              <img
                className="cart-item-img"
                src={item.imageURL}
                alt={item.id}
              ></img>
              <div className="cart-item-content">
                <div className="cart-item-desc">
                  <p>Title: {item.title}</p>
                  <p>Qty: {item.qty}</p>
                  <p>Price: ${item.price}</p>
                </div>
                <button
                  className="btn cart-btn remove-cart-item-btn"
                  onClick={() => {
                    props.removeFromCart(item);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </Fade>
      </div>

      {props.cartItems.length !== 0 && (
        <div className=" cart-checkout">
          <p className="total-price">
            Total Price: $
            {props.cartItems.reduce((acc, item) => {
              return (acc += item.price * item.qty);
            }, 0)}
          </p>
          <button
            className="btn cart-btn checkout-btn"
            onClick={() => setCheckout(true)}
          >
            Select Products
          </button>
        </div>
      )}
      {checkout && <Checkout setCheckout={setCheckout} />}
    </div>
  );
}
export default connect(
  (state) => {
    return { cartItems: state.cart.cartItems };
  },
  { removeFromCart }
)(Cart);
