import React from "react";
import Products from "../components/Products/Products";
import Filter from "../components/Filter/Filter";
import Cart from "../components/Cart/Cart";

export default function Home() {
  return (
    <main>
      <div className="main-section1">
        <Products></Products>
        <Filter />
      </div>
      <div className="main-section2">
        <Cart />
      </div>
    </main>
  );
}
