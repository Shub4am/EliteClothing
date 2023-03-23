import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cartSelector';
import { setIsCartOpen } from '../../store/cart/cartAction';

import { CartIconContainer, ItemCount, ShoppingIcon } from './styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shoppingIcon" />
      <ItemCount> {cartCount} </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
