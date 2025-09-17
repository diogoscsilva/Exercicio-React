import styled, {keyframes} from "styled-components"
import { Card, Content, imageContainerStr } from "./ProductCard";

const skeletonLoading = keyframes`
0% { background-position: 200% 0; }
100% { background-position: -200% 0; }
`

const skeletonStr = `
opacity: 0.7;
background: linear-gradient(90deg, var(--skeleton-bg) 25%, var(--skeleton-shine) 50%, var(--skeleton-bg) 75%);
background-size: 200% 100%;
`

const ImageContainer = styled.div`
${imageContainerStr + skeletonStr}
animation: ${skeletonLoading} 1.5s infinite linear;
`
const lineStr = `
${skeletonStr}
background-color: var(--skeleton-bg);
border-radius: 4px;
margin-bottom: 10px;
height: 16px;  
margin-top: 10px;
`
const LineW80 = styled.div`
${lineStr}
animation: ${skeletonLoading} 1.5s infinite linear;
width: 80%
`
const LineW50 = styled.div`
${lineStr}
animation: ${skeletonLoading} 1.5s infinite linear;
width: 50%;
`
const LineW30 = styled.div`
${lineStr}
animation: ${skeletonLoading} 1.5s infinite linear;
width: 30%;
`
const LineW70 = styled.div`
${lineStr}
animation: ${skeletonLoading} 1.5s infinite linear;
width: 70%;
margin-top: 20px;
`

export function SkeletonCard() {
  return (
    <Card >
      <ImageContainer />
      <Content >
        <LineW80 />
        <LineW50 />
        <LineW30 />
        <LineW70 />
      </Content >
    </Card>
  );
}