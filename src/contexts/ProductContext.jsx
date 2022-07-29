import { createContext, useState, useEffect } from 'react';
import { addCollectionAndDocuments } from '../utils/firebase/index.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  // eslint-disable-next-line
  const [products, setProducts] = useState([]);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
