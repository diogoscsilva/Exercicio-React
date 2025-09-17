import { ThemeToggle } from "../ThemeToggle"
import { useTheme } from "../ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import styles from "./Navbar.module.css"

export function Navbar(props) {
    const dark = useTheme().theme === 'dark' ? true : false
      return (
      <>
        <nav role="navigation">
          <span >Tema Claro</span>
        <ThemeToggle >
          <label className={sytles.toggle + ' ' + (dark ? styles["dark-toggle"] : '')} role="button">
            <span ></span>
          </label>
        </ThemeToggle>
          <a href="#">Celulares</a>
          <a href="#">Notebooks</a>
          <a href="#">Acessórios</a>
          <label aria-label="Icone do arinho de compras." role="button">
          <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
          </label>
        </nav>
      </>
    )
}