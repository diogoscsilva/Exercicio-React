import { CardButton } from "./CardButton";

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
    <div role="group" aria-label={product.name} className="product-card">
      <div className="card-image-container">
        <img src={product.image} alt={"Foto do produto " + product.name} loading="lazy" />
        <div className="card-tags">
          {product.isNew && <span className="tag new">Novo</span>}
          {product.isSale && <span className="tag sale">Promoção</span>}
        </div>
      </div>
      <div className="card-content">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <RatingStars rating={product.rating} />
        </div>
        <div >
          {product.originalPrice && (
            <span className="original-price">
              R$ {product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="current-price">R$ {product.price.toFixed(2)}</span>
        </div>
        <CardButton aria={`Adicionar o pruduto ${product.name} ao carinho.`}/>
      </div>
    </div>
  );
}