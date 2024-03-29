import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../Button';
import CartItem from '../CartItem';
import { selectCartItems } from '../../store/cart/cartSelector';

import { CartDropdownContainer, CartItems, EmptyMessage } from './styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <CartDropdownContainer>
          <CartItems>
            {cartItems.length ? (
              cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
              ))
            ) : (
              <EmptyMessage>Your cart is empty</EmptyMessage>
            )}
          </CartItems>
          <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </CartDropdownContainer>
      )}
    </>
  );
};

export default CartDropdown;
