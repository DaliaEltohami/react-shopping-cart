import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Header></Header>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/orders" element={<Orders />} exact></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
