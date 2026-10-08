import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  const [category, setCategory] = useState("All");
  const [room, setRoom] = useState("All");
  const [query, setQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...current, { ...product, qty: 1 }];
    });

    setCartOpen(true);
  };

  const updateQty = (id, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + amount } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  const shopProps = {
    category,
    setCategory,
    room,
    setRoom,
    query,
    setQuery,
    cartCount,
    cartOpen,
    openCart: () => setCartOpen(true),
    addToCart,
    cart,
    updateQty,
    removeItem,
    closeCart: () => setCartOpen(false),
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home {...shopProps} />} />
        <Route path="/product/:id" element={<ProductDetails {...shopProps} />} />
        <Route path="*" element={<Home {...shopProps} />} />
      </Routes>
    </BrowserRouter>
  );
}
