import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent.js";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { searchTerm, selectedCategory } = useContext(GlobalContext);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<MainContent searchTerm={searchTerm} selectedCategory={selectedCategory} />}
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
