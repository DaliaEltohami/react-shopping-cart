import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from "./data.json";
import Products from "./components/Products/Products";

function App() {
  console.log(data);
  return (
    <div className="layout">
      <Header></Header>
      <main>
        <Products products={data}></Products>
        <div className="filter-section">Filter</div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
