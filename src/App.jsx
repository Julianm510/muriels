import { Navbar } from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import { Home } from "./components/pages/home/Home";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      {/* <Footer /> */}
    </>
  );
}

export default App;
