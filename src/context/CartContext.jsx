import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([{}, {}]);

  const addToCart = () => {};

  const removeById = () => {};

  let data = { cart, addToCart, removeById };

  return <CartContext.Provider value={data}>{children} </CartContext.Provider>;
};
