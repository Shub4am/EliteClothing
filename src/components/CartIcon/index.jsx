import React, { useContext } from 'react';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/CartContext';

import './styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cartIconContainer" onClick={toggleIsCartOpen}>
      <ShoppingBag className="shoppingIcon" />
      <span className="itemCount"> {cartCount} </span>
    </div>
  );
};

export default CartIcon;
