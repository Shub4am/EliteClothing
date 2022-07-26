import React, { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import Button from '../Button';

import './styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="productCardContainer">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
