import { ProductCard } from "../components/tailwind/ProductCard";
import { SkeletonCard } from "../components/tailwind/SkeletonCard";
import { Navbar } from "../components/tailwind/Navbar";
import { PageLayout } from "../components/PageLayout";

export function TailwindPage(props) {
    return <PageLayout Navbar={Navbar} ProductCard={ProductCard} SkeletonCard={SkeletonCard} />
}