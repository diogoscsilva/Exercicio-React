import { CardButton } from "./CardButton";

export function Card (props) {
  return (
    <div className={"flex-col bg-card rounded-[8px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition duration-300 easy-in-out hover:translate-y-[-5px] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] dark:bg-card-dark dark:shadow-[0_4px_8px_rgba(256,256,256,0.1)] dark:hover:shadow-[0_6px_12x_rgba(256,256,256,0.15)]" + (props.className  || "")} role="group" aria-label={props.product.name} >
      {props.children}
    </div>
  )
}

export function ImageContainer (props) {
  return (
    <div className={"bg-skeleton relative top-0 left-0 pt-[100%] dark:bg-skeleton-dark" + (props.className  || "")} >
      {props.children}
    </div>
  )
}

export function Content (props) {
  return (
    <div className={"p-[20px] flex flex-col grow" + (props.className  || "")} >
      {props.children}
    </div>
  )
}

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
    <Card product={product}>
      <ImageContainer >
        <img className="absolute top-0 left-0 w-full h-full object-cover rounded-t-[8px]" src={product.image} alt={"Foto do produto " + product.name} loading="lazy" />
        <span className= {"absolute top-[10px] left-[10px] flex gap-[8px]"}>
          {product.isNew && <span className="text-white bg-new py-[4px] px-[10px] rounded-[4px] font-bold text-xs uppercase" >Novo</span>}
          {product.isSale && <span className="text-white bg-sale py-[4px] px-[10px] rounded-[4px] font-bold text-xs uppercase" >Promoção</span>}
        </span>
      </ImageContainer >
      <Content >
        <h3 className="my-[10px] font-medium text-lg" >{product.name}</h3 >
        <div className="mb-[10px] text-rating" >
          <RatingStars rating={product.rating} />
        </div >
        <div >
          {product.originalPrice && (
            <span className="line-through text-secundary mr-[10px] text-base">
              R$ {product.originalPrice.toFixed(2)}
            </ span>
          )}
          <span className="font-bold text-primary text-2xl" >R$ {product.price.toFixed(2)}</span>
        </div>
        <CardButton aria={`Adicionar o pruduto ${product.name} ao carinho.`} />
      </Content >
    </Card >
  );
}