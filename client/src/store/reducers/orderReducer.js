import { CREATE_ORDER, DELETE_ORDER, FETCH_ORDERS } from "../actions/types";

const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
        orders: action.data.orders,
      };
    case CREATE_ORDER:
      return { ...state, order: action.data.order };
    case DELETE_ORDER:
      return { ...state, order: false };

    default:
      return state;
  }
};

export default orderReducer;
