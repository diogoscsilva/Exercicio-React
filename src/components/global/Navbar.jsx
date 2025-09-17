import { ThemeToggle } from "../ThemeToggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

export function Navbar(props) {
    return (
      <>
        <nav role="navigation">
          <span >Tema Claro</span>
        <ThemeToggle >
          <label className="nav-toggle-button" role="button">
            <span ></span>
          </label>
        </ThemeToggle>
          <a href="#">Celulares</a>
          <a href="#">Notebooks</a>
          <a href="#">Acessórios</a>
          <label aria-label="Icone do arinho de compras." role="button">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          </label>
        </nav>
      </>
    )
}