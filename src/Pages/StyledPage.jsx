import { ProductCard } from "../components/styledComponents/ProductCard";
import { SkeletonCard } from "../components/styledComponents/SkeletonCard";
import { Navbar } from "../components/styledComponents/Navbar";
import { PageLayout } from "../components/PageLayout";

export function StyledPage(props) {
    return <PageLayout Navbar={Navbar} ProductCard={ProductCard} SkeletonCard={SkeletonCard} />
}