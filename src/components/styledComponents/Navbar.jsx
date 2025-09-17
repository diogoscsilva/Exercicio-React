import { ThemeToggle } from "../ThemeToggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { styled } from "styled-components"

const ToggleButton = styled.label`
    display: flex;
    align-items: flex-end;
    height: 1rem;
    width: 2.5rem;
    padding: 1px 2px;
    border-radius: 24px;
    border: solid 1px var(--secondary-color);
    margin-right: 24px;
`

const Icon = styled.label`
    margin-left: 32px;
`
const Switch = styled.span`
    display: inline-block;
    height: 95%;
    width: 70%;
    background-color: var(--primary-color);
    border-radius: 24px;
`

export function Navbar(props) {
    return (
      <>
        <nav role="navigation">
          <span >Tema Claro</span>
        <ThemeToggle >
          <ToggleButton role="button">
            <Switch ></Switch>
          </ToggleButton>
        </ThemeToggle>
          <a href="#">Celulares</a>
          <a href="#">Notebooks</a>
          <a href="#">Acessórios</a>
          <Icon aria-label="Icone do arinho de compras." role="button">
          <FontAwesomeIcon icon={faShoppingCart} />
          </Icon>
        </nav>
      </>
    )
}