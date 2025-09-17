import { Card, Content, ImageContainer } from "./ProductCard";

const skeletonStr = " opacity-70 bg-size-[200%_100%] bg-linear-[90deg,var(--skeleton-bg)_25%,var(--skeleton-shine)_50%,var(--skeleton-bg)_75%] animate-skeleton-loading "

function Line (props) {
  return (
    <div className={"bg-skeleton rounded-[4px] mb-[10px] h-[16px] mt-[2px]" 
    + skeletonStr
    + (props.className  || "")}>
      {props.children}
    </div>
  )
}


export function SkeletonCard() {
  return (
    <Card product={{name:''}}>
      <ImageContainer className={skeletonStr} />
      <Content >
        <Line className="w-[80%]" />
        <Line  className="w-[50%]" />
        <Line  className="w-[30%]" />
        <Line  className="w-[70%] mt-[20px]"/>
      </Content >
    </Card>
  );
}