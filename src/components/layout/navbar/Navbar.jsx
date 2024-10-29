import "./navbar.css";
import { Card } from "../../common/cartWidget/Card/Card";
import { CartWidget } from "../../pages/CartWidget/CartWidget";
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
          <li>Inicio</li>
          <li>Guantes de Boxeo</li>
          <li>Equipamiento</li>
          <li>Protección</li>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
