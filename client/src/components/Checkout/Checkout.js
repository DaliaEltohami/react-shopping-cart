import React, { useState } from "react";
import Input from "../Input/Input";
import "../../css/Checkout/Checkout.css";
import { Slide } from "react-awesome-reveal";
import Modal from "react-modal";
import { connect } from "react-redux";

function Checkout(props) {
  const [value, setValue] = useState("");
  const [order, setOrder] = useState(false);

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    console.log(order);
    // props.setCheckout(false);
    setOrder(true);
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
            label="Name"
            type="text"
            name="name"
            placeholder="Please Enter Your Name"
            onChange={handleChange}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Please Enter Your Email"
            onChange={handleChange}
          />
          <div>
            <button type="submit" className="btn2">
              Checkout
            </button>
          </div>
        </form>
        <Modal
          isOpen={order}
          onRequestClose={() => {
            props.setCheckout(false);
            setOrder(false);
          }}
        >
          <div className="order-section">
            <span
              className="close-icon"
              onClick={() => {
                setOrder(false);
                props.setCheckout(false);
              }}
            >
              &times;
            </span>
            <div className="order-alert">order completed successfully</div>
            <div className="order-content">
              <table className="order-info">
                <thead>
                  <tr>
                    <th colSpan={2}>order Info</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name: </td>
                    <td>{value.name}</td>
                  </tr>
                  <tr>
                    <td>Email: </td>
                    <td>{value.email}</td>
                  </tr>
                  <tr>
                    <td>Total: </td>
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
                        <td>Product: {item.title}</td>
                        <td>qty: {item.qty}</td>
                        <td>price: ${item.qty * item.price}</td>
                      </tr>
                    );
                  })}
                  <tr className="total-price">
                    <td colSpan={2}>Total Price</td>
                    <td>${props.cartTotal} </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Modal>
      </>
    </Slide>
  );
}

export default connect((state) => {
  return {
    cartItems: state.cart.cartItems,
    cartTotal: state.cart.cartTotal,
  };
})(Checkout);
