import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (product) => {
  console.log("add to cart action creator");
  return (dispatch, getState) => {
    const cartItemsClone = [...getState().cart.cartItems];
    let isExist = false;
    let newCartItems = [];
    cartItemsClone.forEach((item) => {
      if (item._id === product._id) {
        newCartItems.push({ ...item, qty: item.qty + 1 });
        isExist = true;
      } else {
        newCartItems.push(item);
      }
    });
    if (!isExist) {
      newCartItems.push({ ...product, qty: 1 });
    }
    console.log(newCartItems);
    dispatch({
      type: ADD_TO_CART,
      cartItems: newCartItems,
    });
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };
};

export const removeFromCart = (product) => {
  return (dispatch, getState) => {
    let filteredCartItems = getState().cart.cartItems.filter(
      (item) => item._id !== product._id
    );
    dispatch({
      type: REMOVE_FROM_CART,
      cartItems: filteredCartItems,
    });
    localStorage.setItem("cartItems", JSON.stringify(filteredCartItems));
  };
};
