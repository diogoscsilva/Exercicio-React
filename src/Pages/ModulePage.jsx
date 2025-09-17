import { ProductCard } from "../components/modules/ProductCard";
import { SkeletonCard } from "../components/modules/SkeletonCard";
import { Navbar } from "../components/modules/Navbar";
import { PageLayout } from "../components/PageLayout";

export function ModulePage(props) {
    return <PageLayout Navbar={Navbar} ProductCard={ProductCard} SkeletonCard={SkeletonCard} />
}