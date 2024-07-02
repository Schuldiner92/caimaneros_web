import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import "../../styles/Navbar/MenuItems.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const logout = async () => {
    // Limpiar sessionStorage y localStorage
    sessionStorage.removeItem("token");
    localStorage.removeItem("user");
    // Redireccionar al login
    navigate("/login-entrenador");
  };

  const handleClick = (ruta) => {
    if (ruta === "") {
      return;
    } else if (ruta === "logout") {
      logout();
    } else {
      window.location.href = `/${ruta}`;
    }
  };

  return (
    <li
      className={`menu-items ${items.title === "Salir" ? "logout-item" : ""}`}
      data-title={items.title}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <img src={items.image} alt="Iconos" className="iconos" />
            {items.title}
            {depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : items.title === "" ? (
              <span className="arrow" />
            ) : null}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <button className="menu-link" onClick={() => handleClick(items.title === "Salir" ? "logout" : items.ruta)}>
          <img src={items.image} alt="Icono" className="icon" />
          <span className="text">{items.title}</span>
        </button>
      )}
    </li>
  );
};

export default MenuItems;
