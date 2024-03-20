import React, { useState } from "react";
import Input from "../Input/Input";
import "../../css/Checkout/Checkout.css";
import { Slide } from "react-awesome-reveal";

function Checkout(props) {
  const [value, setValue] = useState("");

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
    props.setCheckout(false);
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
      </>
    </Slide>
  );
}

export default Checkout;
