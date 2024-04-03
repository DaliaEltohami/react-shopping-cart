import { CREATE_ORDER, DELETE_ORDER } from "../actions/types";

const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { order: action.data.order };
    case DELETE_ORDER:
      return { order: false };
    default:
      return state;
  }
};

export default orderReducer;
