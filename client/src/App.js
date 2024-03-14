import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from "./data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [products, setProducts] = useState(data);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const handleFilter = (size, order) => {
    console.log(size, order);
    let filteredProducts = [];
    if (size === "ALL") {
      setProducts(data);
    } else {
      filteredProducts = data.filter(
        (product) => product.size.indexOf(size) !== -1
      );
    }
    filteredProducts = filteredProducts.sort(function (a, b) {
      if (order === "latest") {
        return a.id < b.id ? 1 : -1;
      } else if (order === "lowest") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProducts(filteredProducts);
  };

  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    let isExist = false;
    cartItemsClone.forEach((item) => {
      if (item.id === product.id) {
        item.qty++;
        isExist = true;
      }
    });
    if (!isExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    setCartItems(cartItemsClone);
  };

  const removeCartItem = (product) => {
    let filteredCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(filteredCartItems);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="layout">
      <Header></Header>
      <main>
        <div className="main-section1">
          <Products products={products} addToCart={addToCart}></Products>
          <Filter handleFilter={handleFilter} productsCount={products.length} />
        </div>
        <div className="main-section2">
          <Cart cartItems={cartItems} removeCartItem={removeCartItem} />
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
