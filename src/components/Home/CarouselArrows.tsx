import React from 'react';

type ArrowProps = {
  onClick?: () => void;
  className?: string;
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick, className }) => (
  <div onClick={onClick} className={`slick-arrow slick-prev ${className}`}>
    ←
  </div>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick, className }) => (
  <div onClick={onClick} className={`slick-arrow slick-next ${className}`}>
    →
  </div>
);

export { PrevArrow, NextArrow };