import { FETCH_PRODUCTS } from "../actions/types";

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { products: action.data };
    default:
      return state;
  }
};

export default productReducer;
