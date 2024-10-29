import "./navbar.css";
import { Card } from "../../common/CartWidget/Card/Card";
import { CartWidget } from "../../common/CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = ({ darkMode }) => {
  console.log("modoDark");
  console.log(darkMode);
  return (
    <>
      <div
        className={darkMode ? "container-nav-dark asd" : "container-nav asd"}
      >
        <Link to="/">
          <img
            className="logo"
            src="https://res.cloudinary.com/dufycalt2/image/upload/v1728335508/guantes-boxeo-colgantes-equipo-competicion-proteccion-manos-ilustracion-vectorial_1284-41868_cvng2x.jpg"
            alt=""
          />
        </Link>

        <ul style={{ display: "flex", gap: "45px" }}>
          <Link to="/">Inicio</Link>
          <Link to="/category/guantes">Guantes de Boxeo</Link>
          <Link to="/category/equipamiento">Equipamiento</Link>
          <Link to="/category/proteccion">Protección</Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
