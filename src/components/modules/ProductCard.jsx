import { useTheme } from "../ThemeContext";
import { CardButton } from "./CardButton";
import styles from "./ProductCard.module.css"

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < fullStars ? '★' : '☆');
  }
  return <span title={`${rating} de 5 estrelas`}>{stars.join('')}</span>;
};


export function ProductCard({ product }) {
  const dark = useTheme().theme === 'dark' ? true : false
  return (
    <div role="group" aria-label={product.name} className={styles.card + ' ' + (dark ? styles["dark-card"] : '')}>
      <div className={styles["image-container"] + ' ' + (dark ? styles["dark-image-container"] : '')} >
        <img src={product.image} alt={"Foto do produto " + product.name} loading="lazy" />
        <div className={styles.tags} >
          {product.isNew && <span className={styles.tag + ' ' + styles.new + ' ' + (dark ? styles["dark-tag"] : '')} >Novo</span>}
          {product.isSale && <span className={styles.tag + ' ' + styles.sale + ' ' + (dark ? styles["dark-tag"] : '')} >Promoção</span>}
        </div>
      </div>
      <div className={styles.content} >
        <h3 className={styles.name} >{product.name}</h3>
        <div className={styles.rating} >
          <RatingStars rating={product.rating} />
        </div>
        <div >
          {product.originalPrice && (
            <span className={styles["original-price"] + ' ' + (dark ? styles["dark-original-price"] : '')} >
              R$ {product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className={styles["current-price"]} >R$ {product.price.toFixed(2)}</span>
        </div>
        <CardButton aria={`Adicionar o pruduto ${product.name} ao carinho.`} />
      </div>
    </div>
  );
}