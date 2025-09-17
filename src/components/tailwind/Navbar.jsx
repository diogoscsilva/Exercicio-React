import { ThemeToggle } from "../ThemeToggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

export function Navbar(props) {
    return (
      <>
        <nav role="navigation">
          <span >Tema Claro</span>
        <ThemeToggle >
          <label className="flex align-end h-[1rem] w-[2.5rem] py-[1px] px-[2px] rounded-[24px] border border-solid border-secondary m4-[24px]dark:justify-end dark:border-secondary-dark" role="button">
            <span className="inline-block h-[95%] w-[70%] bg-primary rounded-[24px] dark: bg-primary-dark"></span>
          </label>
        </ThemeToggle>
          <a href="#">Celulares</a>
          <a href="#">Notebooks</a>
          <a href="#">Acessórios</a>
          <label aria-label="Icone do arinho de compras." role="button">
          <FontAwesomeIcon icon={faShoppingCart} className="ml-[32px]" />
          </label>
        </nav>
      </>
    )
}