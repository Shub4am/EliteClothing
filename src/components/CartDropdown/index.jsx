import React, { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

import Button from '../Button';
import CartItem from '../CartItem';

import './styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cartDropdownContainer">
      <div className="cartItems">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="emptyMessage">Your cart is empty</span>
        )}
      </div>
      <Button>go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
