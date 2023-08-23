import "../../styles/Home.scss";
import { CatMenu } from "./CatMenu";
import { MainBanner } from "./MainBanner";
import { Partners } from "./Partners";
import { RelatedProducts } from "./RelatedProducts";

export function Home() {
    return (
        <main className="home">
            <MainBanner />
            <CatMenu />
            <RelatedProducts />
            <Partners />
        </main>
    )
}