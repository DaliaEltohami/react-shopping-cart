import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="layout">
      <Header></Header>
      <main>
        <div className="main-section1">
          <Products></Products>
          <Filter />
        </div>
        <div className="main-section2">
          <Cart />
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
