import React, { useState } from "react";
import Input from "../Input/Input";
import "../../css/Checkout/Checkout.css";
import { Slide } from "react-awesome-reveal";
import Modal from "react-modal";
import { connect } from "react-redux";
import {
  createOrder,
  deleteOrder,
} from "../../store/actions/orderActionCreator";
import { clearCart } from "../../store/actions/cartActionCreators";
import { words } from "../../static";

function Checkout(props) {
  const [value, setValue] = useState("");
  const { order } = props;

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createOrder(value);
  };

  const handleOrderModalClose = () => {
    props.setCheckout(false);
    props.deleteOrder();
    props.clearCart();
  };

  return (
    <Slide className="checkout-section" direction="up">
      <>
        <span
          className="close-icon checkout-close-icon"
          onClick={() => props.setCheckout(false)}
        >
          &times;
        </span>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <Input
            label={words.inputName}
            type="text"
            name="name"
            placeholder="Please Enter Your Name"
            onChange={handleChange}
          />
          <Input
            label={words.inputEmail}
            type="email"
            name="email"
            placeholder="Please Enter Your Email"
            onChange={handleChange}
          />
          <div>
            <button type="submit" className="btn2">
              {words.checkoutBtn}
            </button>
          </div>
        </form>
        {order && (
          <Modal isOpen={order} onRequestClose={handleOrderModalClose}>
            <div className="order-section">
              <span className="close-icon" onClick={handleOrderModalClose}>
                &times;
              </span>
              <div className="order-alert">{words.orderHeader}</div>
              <div className="order-content">
                <table className="order-info">
                  <thead>
                    <tr>
                      <th colSpan={2}>{words.orderInfo}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{words.orderName} </td>
                      <td>{order.name}</td>
                    </tr>
                    <tr>
                      <td>{words.orderEmail} </td>
                      <td>{order.email}</td>
                    </tr>
                    <tr>
                      <td>{words.orderTotal} </td>
                      <td>${props.cartTotal}</td>
                    </tr>
                  </tbody>
                </table>
                <table className="selected-items">
                  <thead>
                    <tr>
                      <th colSpan={3}>Selected Items</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.cartItems.map((item) => {
                      return (
                        <tr key={item._id}>
                          <td>
                            {words.orderProductTitle} {item.title}
                          </td>
                          <td>
                            {words.orderProductQty} {item.qty}
                          </td>
                          <td>
                            {words.orderProductTotal} ${item.qty * item.price}
                          </td>
                        </tr>
                      );
                    })}
                    <tr className="total-price">
                      <td colSpan={2}>{words.orderTotal2}</td>
                      <td>${props.cartTotal} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Modal>
        )}
      </>
    </Slide>
  );
}

export default connect(
  (state) => {
    return {
      cartItems: state.cart.cartItems,
      cartTotal: state.cart.cartTotal,
      order: state.order.order,
    };
  },
  { createOrder, deleteOrder, clearCart }
)(Checkout);
