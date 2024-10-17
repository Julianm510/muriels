import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";
import { PruebaGrid } from "./components/PruebaGrid";
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
      <Navbar darkMode={darkMode} />
      <ItemListContainer darkMode={darkMode} />
      <button onClick={cambiarModo}>botoncam</button>
      <button onClick={aparecer}>montar y desmontar</button>
    </>
  );
}

export default App;
