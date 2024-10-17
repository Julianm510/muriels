import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [montar, setMontar] = useState(false);

  const aparecer = () => {
    setMontar(!montar);
  };

  const cambiarModo = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    console.log("probando use");
  }, [montar]);

  return (
    <>
      <Home />
      <Navbar darkMode={darkMode} />
      <button onClick={cambiarModo}>botoncam</button>
      <ItemListContainer darkMode={darkMode} />
      <button onClick={aparecer}>montar y desmontar</button>
      <Home />
    </>
  );
}

export default App;
