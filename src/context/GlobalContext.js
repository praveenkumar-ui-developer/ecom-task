import React, { createContext, useState, useEffect } from "react";
import { fetchProducts, fetchCategories } from "../services/productService";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchProducts().then(setProducts);
    fetchCategories().then(setCategories);
  }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert('Item added to cart successfully')

  };

  const removeFromCart = (productId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setCart((prev) => prev.filter((item) => item.id !== productId));
    }
    alert("Item removed from cart successfully")
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        products,
        setProducts,
        categories,
        setCategories,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        darkMode,
        setDarkMode,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
