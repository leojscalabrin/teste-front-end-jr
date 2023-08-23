import { productList, Product } from "./productList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./CarouselArrows";

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

const ProductCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="home__related-products--carousel">
      <div className="home__product-carousel">
        <Slider {...settings}>
          {productList.products.map((product: Product, index: number) => (
            <div key={index} className="home__product-carousel--product-card">
              <img
                className="home__product-carousel--product-image"
                src={product.photo}
                alt={product.productName}
              />
              <h3 className="home__product-carousel--product-name">
                {product.productName}
              </h3>
              <p className="home__product-carousel--product-description">
                {product.descriptionShort}
              </p>
              <p className="home__product-carousel--product-price">
                {formatPrice(product.price)}
              </p>
              <p className="home__product-carousel--free-shipping">
                Frete grátis
              </p>
              <button className="home__product-carousel--buy-button">
                Comprar
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
