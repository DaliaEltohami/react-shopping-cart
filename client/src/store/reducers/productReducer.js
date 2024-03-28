import { FETCH_PRODUCTS, FILTER_PRODUCTS } from "../actions/types";

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { products: action.data, filteredProducts: action.data };
    case FILTER_PRODUCTS: {
      console.log(action);
      return {
        ...state,
        filteredProducts: action.products,
        size: action.size,
        order: action.order,
      };
    }
    default:
      return state;
  }
};

export default productReducer;
