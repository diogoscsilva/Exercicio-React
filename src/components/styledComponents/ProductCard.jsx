import styled from "styled-components"
import { CardButton } from "./CardButton"

export const Card = styled.div`
    background-color: var(--card-background);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    }
`
export const imageContainerStr = `
position: relative;
top: 5%;
left: 12.5%;
width: 75%;
padding-top: 75%; 
background-color: var(--skeleton-bg);
`
const ImageContainer = styled.div`
${imageContainerStr}
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  `

export const Content = styled.div`
   padding: 20px;
   flex-grow: 1;
   display: flex;
   flex-direction: column;
   `

const Tags = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  gap: 8px;
  `

const Tag = styled.span`
  color: white;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: ${props => props.new ? 'var(--new-tag-bg)'
    : props.sale ? 'var(--sale-tag-bg)' : 'none'};
  `

const Name = styled.h3`
font-size: 1.2rem;
font-weight: 500;
margin: 10px 0;
`

const Rating = styled.div`
margin-bottom: 10px;
color: var(--rating-color);
`

const OriginalPrice = styled.span`
text-decoration: line-through;
color: var(--secondary-color);
font-size: 0.9rem;
margin-right: 10px;
`

const CurrentPrice = styled.span`
font-size: 1.5rem;
font-weight: 700;
color: var(--primary-color);
`

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < fullStars ? '★' : '☆');
  }
  return <span title={`${rating} de 5 estrelas`}>{stars.join('')}</span>;
};

export function ProductCard({ product }) {
  return (
    <Card >
      <ImageContainer >
        <Image src={product.image} alt={product.name} loading="lazy" />
        <Tags >
          {product.isNew && <Tag new >Novo</Tag>}
          {product.isSale && <Tag sale >Promoção</Tag>}
        </Tags>
      </ImageContainer>
      <Content >
        <Name >{product.name}</Name >
        <Rating >
          <RatingStars rating={product.rating} />
        </Rating >
        <div >
          {product.originalPrice && (
            <OriginalPrice >
              R$ {product.originalPrice.toFixed(2)}
            </ OriginalPrice>
          )}
          <CurrentPrice >R$ {product.price.toFixed(2)}</CurrentPrice>
        </div>
         <CardButton aria={`Adicionar o pruduto ${product.name} ao carinho.`} />
      </Content >
    </Card >
  );
}