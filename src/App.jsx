import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";

import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer";
import { CartContainer } from "./components/pages/cart/CartContainer";
import { Checkout } from "./components/pages/checkout/Checkout";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/itemdetail/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h2>404 Not Found</h2>} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
