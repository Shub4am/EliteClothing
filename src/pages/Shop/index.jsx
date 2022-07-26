import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductContext';
import ProductCard from '../../components/ProductCard';

import './styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="productContainer">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
