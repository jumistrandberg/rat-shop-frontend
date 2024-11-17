import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ShopCategory from "./pages/ShopCategory";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rats" element={<ShopCategory category="rats" />} />
          <Route path="/maybe" element={<ShopCategory category="maybe" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
