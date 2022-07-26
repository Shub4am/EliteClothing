import React from 'react';
import './styles.scss';
import Button from '../Button';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="productCardContainer">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
