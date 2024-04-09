import { CREATE_ORDER, DELETE_ORDER, FETCH_ORDERS } from "./types";

export const createOrder = (order) => {
  return (dispatch) => {
    fetch("/api/orders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: CREATE_ORDER,
          data: {
            order: data,
          },
        });
      });
  };
};

export const deleteOrder = () => {
  return (dispatch) => {
    dispatch({
      type: DELETE_ORDER,
    });
  };
};

export const fetchOrders = () => {
  return (dispatch) => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_ORDERS,
          data: {
            orders: data,
          },
        });
      });
  };
};
