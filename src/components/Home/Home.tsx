import "../../styles/Home.scss";
import { CatMenu } from "./CatMenu";
import { CategorySelection } from "./CategorySelection";
import { MainBanner } from "./MainBanner";
import { Partners } from "./Partners";
import ProductCarousel from "./ProductCarousel";
import { RelatedProducts } from "./RelatedProducts";
import { RelatedProductsImages } from "./RelatedProductsImages";

export function Home() {
    return (
        <main className="home">
            <MainBanner />
            <CatMenu />
            <RelatedProducts />
            <CategorySelection />
            <ProductCarousel />
            <Partners />
            <RelatedProducts />
            <p className="home__related-products--see-all">
                Ver todos
            </p>
            <RelatedProductsImages />
        </main>
    )
}