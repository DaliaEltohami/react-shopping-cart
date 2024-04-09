import { connect } from "react-redux";
import React, { useEffect } from "react";
import { fetchOrders } from "../../store/actions/orderActionCreator";
import "../../css/Orders/Orders.css";

function Orders(props) {
  console.log(props.orders);
  useEffect(() => {
    props.fetchOrders();
  }, []);

  return (
    <div className="orders">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>CartItems</th>
          </tr>
        </thead>
        <tbody>
          {props.orders &&
            props.orders.map((order) => {
              return (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>
                    {order.cartItems.map((item) => {
                      console.log(item);
                      return (
                        <p>
                          <span>Tilte: {item.title}</span>
                          <span>Qty: {item.qty}</span>
                        </p>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default connect(
  (state) => {
    return {
      orders: state.order.orders,
    };
  },
  { fetchOrders }
)(Orders);
