import React, { useContext } from 'react';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/CartContext';

import './styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cartIconContainer" onClick={toggleIsCartOpen}>
      <ShoppingBag className="shoppingIcon" />
      <span className="itemCount"> {cartItemCount} </span>
    </div>
  );
};

export default CartIcon;
