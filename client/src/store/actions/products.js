import { FETCH_PRODUCTS, FILTER_PRODUCTS } from "./types";

export const fetchProducts = () => {
  return (dispatch) => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_PRODUCTS,
          data,
        });
      });
  };
};

export const filterProducts = (size, order, products) => {
  return (dispatch) => {
    let filteredProducts = products.filter(
      (product) => product.size.indexOf(size) !== -1
    );
    filteredProducts = filteredProducts.sort(function (a, b) {
      if (order === "latest") {
        return a.id < b.id ? 1 : -1;
      } else if (order === "lowest") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    console.log(filteredProducts);
    dispatch({
      type: FILTER_PRODUCTS,
      products: filteredProducts,
      size,
      order,
    });
  };
};
