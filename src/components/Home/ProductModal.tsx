import { Product } from './productList';

type ProductModalProps = {
  product: Product;
  onClose: () => void;
};

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className='home__modal'>
      <div className='home__modal--content'>
        <img className='home__modal--product-image' src={product.photo} alt={product.productName} />
        <h2 className='home__modal--product-name'>{product.productName}</h2>
        <p className='home__modal--product-price'>{formatPrice(product.price)}</p>
        <p className='home__modal--product-description'>{product.descriptionShort}</p>
        <div className='home__modal--product-details'>Veja mais detalhes do produto {'>'}</div>
        <div className='home__modal--counter'>
          <p className='home__modal--counter--text'>-</p>
          <p className='home__modal--counter--text'>1</p>
          <p className='home__modal--counter--text'>+</p>
        </div>
        <button className='home__modal--buy'>Comprar</button>
        <button className='home__modal--close' onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default ProductModal;