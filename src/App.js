import Home from "./components/Home";

import Products from "./components/Products";
import Product from "./components/Product";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
