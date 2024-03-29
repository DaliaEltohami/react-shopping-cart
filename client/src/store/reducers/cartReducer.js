import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems")) || [] },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cartItems: action.cartItems,
      };
    case REMOVE_FROM_CART:
      return {
        cartItems: action.cartItems,
      };
    default:
      return state;
  }
};

export default cartReducer;
