import React from 'react';
import Button from '../Button';
import './styles.scss';

const CartDropdown = () => {
  return (
    <div className="cartDropdownContainer">
      <div className="cartItems">
        <Button>Go to Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
