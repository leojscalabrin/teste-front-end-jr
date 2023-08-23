import { productList, Product } from './productList';

const ProductCarousel = () => {
  return (
    <div className="product-carousel">
      <h2>Produtos em Destaque</h2>
      <div className="carousel">
        {productList.products.map((product: Product, index: number) => (
          <div key={index} className="product-card">
            <img src={product.photo} alt={product.productName} />
            <h3>{product.productName}</h3>
            <p>{product.descriptionShort}</p>
            <p>Preço: R$ {product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;