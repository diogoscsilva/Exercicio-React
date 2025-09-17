import { styled } from "styled-components"

const Button = styled.button`
    align-self: flex-end;
    background-color: var(--primary-color);
    width: 7rem;
    padding: 0.3rem 0.7rem;
    border-radius: 8px;
    color: var(--card-background);
    transition: all 0.2s;
    outline: none;
    $hover:filter: brightness(95%);
    scale: 105%;
    border: solid 3px var(--card-background);
    box-shadow: 0 0 0 3px var(--primary-color);
    
    &:hover {
       filter: brightness(95%);
       scale: 105%;
       border: solid 3px var(--card-background);
       box-shadow: 0 0 0 3px var(--primary-color);
    }
       
    &:focus {
       filter: brightness(95%);
       scale: 105%;
       border: solid 3px var(--card-background);
       box-shadow: 0 0 0 3px var(--primary-color);
    }

`

export function CardButton ({className = "", aria = ""}) {
  return <Button  aria-label={aria} >
        Comprar
  </Button>
}