import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../actions/types";

const cartReducer = (
  state = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    cartTotal: JSON.parse(localStorage.getItem("cartTotal")) || 0,
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cartItems: action.cartItems,
        cartTotal: action.cartTotal,
      };
    case REMOVE_FROM_CART:
      return {
        cartItems: action.cartItems,
        cartTotal: action.cartTotal,
      };
    case CLEAR_CART:
      return { cartItems: [], cartTotal: 0 };
    default:
      return state;
  }
};

export default cartReducer;
