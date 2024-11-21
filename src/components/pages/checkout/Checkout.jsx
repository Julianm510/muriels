import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const funcionDelForm = (evento) => {
    evento.preventDefault();
    const total = getTotalAmount();

    const order = {
      buyer: userInfo,
      items: cart,
      total,
    };

    let refCollection = collection(db, "orders");
    addDoc(refCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
    });

    let refCol = collection(db, "Products");
    order.items.forEach((item) => {
      let refDoc = doc(refCol, item.id);
      updateDoc(refDoc, { stock: item.stock - item.quantity });
    });
  };

  const capturarInfo = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  if (orderId) {
    return <h1>Gracias por su compra, tu N° de orden es: {orderId} </h1>;
  }
  return (
    <div>
      <form onSubmit={funcionDelForm}>
        <input
          type="text"
          placeholder="Inserte Nombre"
          name="name"
          onChange={capturarInfo}
        />
        <input
          type="email"
          placeholder="@hotmail.com"
          name="email"
          onChange={capturarInfo}
        />
        <input
          type="text"
          placeholder="Numero de telefono"
          name="phoneNumber"
          onChange={capturarInfo}
        />
        <button>Comprar</button>
        <button type="button">cancelar</button>
      </form>
    </div>
  );
};
export default Checkout;
