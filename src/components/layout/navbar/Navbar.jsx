import { Margin } from "@mui/icons-material";
import "./navbar.css";
import { FaCartArrowDown } from "react-icons/fa";
import { colors } from "@mui/material";
import { CartWidget } from "../../common/cartWidget/CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <>
      <div className="container-nav">
        <img
          className="logo"
          src="https://res.cloudinary.com/dufycalt2/image/upload/v1728335508/guantes-boxeo-colgantes-equipo-competicion-proteccion-manos-ilustracion-vectorial_1284-41868_cvng2x.jpg"
          alt=""
        />
        <ul style={{ display: "flex", gap: "25px" }}>
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
