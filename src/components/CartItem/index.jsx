import React from 'react';

import './styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cartItemContainer">
      <img src={imageUrl} alt={`${name}`} />
      <div className="itemDetails">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
