import { ProductCard } from "../components/global/ProductCard";
import { SkeletonCard } from "../components/global/SkeletonCard";
import { Navbar } from "../components/global/Navbar";
import { PageLayout } from "../components/PageLayout";

export function GlobalPage(props) {
    return <PageLayout Navbar={Navbar} ProductCard={ProductCard} SkeletonCard={SkeletonCard} />
}