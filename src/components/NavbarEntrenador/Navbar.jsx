import { items } from "./Items.jsx";
import MenuItems from "./MenuItems.jsx";
import "../../styles/Navbar/Navbar.css";
import "../../styles/Navbar/MenuItems.css";
import { Link } from "react-router-dom";

const Navbar = ({ cedula }) => {
  return (
    <nav className="barra">
      <ul className="menus">
        <Link to={`/BienvenidaEntrenadorPrincipal`}>
          <img
            className="logo"
            src="/navbar/logo-caimaneros.png"
            style={{ width: "80px", height: "80px" }}
          />
        </Link>

        {items.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
              cedula={cedula}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;