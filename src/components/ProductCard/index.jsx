import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cartSelector';
import { addItemToCart } from '../../store/cart/cartAction';
import Button, { BUTTON_TYPE_CLASSES } from '../Button';

import { ProductCartContainer, Footer, Name, Price } from './styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
