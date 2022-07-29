import React, { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

import { CartIconContainer, ItemCount, ShoppingIcon } from './styles.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shoppingIcon" />
      <ItemCount> {cartCount} </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
