import React from "react";
import "../../css/Cart/Cart.css";

function Cart({ cartItems, removeCartItem }) {
  let totalCartItems = 0;
  cartItems.forEach((element) => {
    totalCartItems += element.qty;
  });
  return (
    <div className="cart-section">
      <h2 className="cart-header">Cart Items: {totalCartItems}</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
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
                className="remove-cart-item-btn"
                onClick={() => {
                  removeCartItem(item);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cart;
