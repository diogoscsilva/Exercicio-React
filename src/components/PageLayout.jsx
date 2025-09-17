import { useEffect, useState } from "react";
import { ProductGrid } from "./ProductGrid";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./global/globalStyle.css"
import "../App.css"
import { productData } from '../assets/mock';

export function PageLayout({Navbar, ProductCard, SkeletonCard}) {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProducts(productData);
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    const totalSkeletons = 6;
    return (
        <>
            <Header >
                <Navbar />
            </Header >
            <main>
                <section className="products-section">
                    <div className="container">
                        <h2>Nossos Produtos em Destaque</h2>
                        {
                            <ProductGrid >
                                {
                                isLoading
                                ?    Array.from({ length: totalSkeletons }).map((_, index) => (
                                        <SkeletonCard key={index} />
                                    ))
                            
                                :    products.map((product) => (
                                        <ProductCard key={product.name} product={product} />
                                    ))
                                }
                            </ProductGrid >
                        }
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}