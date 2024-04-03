import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkout from "../Checkout/Checkout";
import { Fade } from "react-awesome-reveal";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/cartActionCreators";
import { words } from "../../static";

function Cart(props) {
  const [checkout, setCheckout] = useState(false);
  return (
    <div className="cart-section">
      <h2 className="cart-header">
        {words.cartHeader}
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
                  <p>
                    {words.cartItemTitle} {item.title}
                  </p>
                  <p>
                    {words.cartItemQty} {item.qty}
                  </p>
                  <p>
                    {words.cartItemPrice} ${item.price}
                  </p>
                </div>
                <button
                  className="btn cart-btn remove-cart-item-btn"
                  onClick={() => {
                    props.removeFromCart(item);
                  }}
                >
                  {words.cartItemRemoveBtn}
                </button>
              </div>
            </div>
          ))}
        </Fade>
      </div>

      {props.cartItems.length !== 0 && (
        <div className=" cart-checkout">
          <p className="total-price">
            {words.cartTotal} ${props.cartTotal}
          </p>
          <button
            className="btn cart-btn checkout-btn"
            onClick={() => setCheckout(true)}
          >
            {words.SelectItemsBtn}
          </button>
        </div>
      )}
      {checkout && <Checkout setCheckout={setCheckout} />}
    </div>
  );
}
export default connect(
  (state) => {
    return { cartItems: state.cart.cartItems, cartTotal: state.cart.cartTotal };
  },
  { removeFromCart }
)(Cart);
