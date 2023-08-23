import "../../styles/Home.scss";
import { CatMenu } from "./CatMenu";
import { MainBanner } from "./MainBanner";

export function Home() {
    return (
        <main className="home">
            <MainBanner />
            <CatMenu />
        </main>
    )
}