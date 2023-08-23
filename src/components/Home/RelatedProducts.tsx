import ProductCarousel from "./ProductCarousel";

export function RelatedProducts() {
    return (
        <div className="home__related-products">
            <h2 className="home__related-products--title">
                Produtos Relacionados
            </h2>

            <div className="home__related-products--category-selection">
                <div className="home__related-products--category-title selected">Celular</div>
                <div className="home__related-products--category-title">Acessórios</div>
                <div className="home__related-products--category-title">Tablets</div>
                <div className="home__related-products--category-title">Notebooks</div>
                <div className="home__related-products--category-title">TVs</div>
                <div className="home__related-products--category-title">Ver todos</div>
            </div>

            <div className="home__related-products--carousel">
                <ProductCarousel/>
            </div>
        </div>
    )
}