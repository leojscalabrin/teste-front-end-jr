import React from "react";
import Slider, { CustomArrowProps } from "react-slick"; 

const Brands = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="home__brand-carousel">
      <Slider {...settings}>
        <div>
          <img src={require("../../assets/vtex-brand.png")} alt="Vtex Logo" />
        </div>
        <div>
          <img src={require("../../assets/vtex-brand.png")} alt="Vtex Logo" />
        </div>
        <div>
          <img src={require("../../assets/vtex-brand.png")} alt="Vtex Logo" />
        </div>
        <div>
          <img src={require("../../assets/vtex-brand.png")} alt="Vtex Logo" />
        </div>
        <div>
          <img src={require("../../assets/vtex-brand.png")} alt="Vtex Logo" />
        </div>
        <div>
          <img src={require("../../assets/vtex-brand.png")} alt="Vtex Logo" />
        </div>
        <div>
          <img src={require("../../assets/vtex-brand.png")} alt="Vtex Logo" />
        </div>
        <div>
          <img src={require("../../assets/vtex-brand.png")} alt="Vtex Logo" />
        </div>
        <div>
          <img src={require("../../assets/vtex-brand.png")} alt="Vtex Logo" />
        </div>
        <div>
          <img src={require("../../assets/vtex-brand.png")} alt="Vtex Logo" />
        </div>
      </Slider>
    </div>
  );
};

const CustomNextArrow: React.FC<CustomArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div className="home__brand-carousel--button" onClick={onClick}>
      {'>'}
    </div>
  );
};

export default Brands;
