import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
  return (
    <div style={{ margin: "50px" }}>
      <FaShoppingCart />
      <span>0</span>
    </div>
  );
};
