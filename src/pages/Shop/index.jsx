import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../CategoriesPreview';

import './styles.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};

export default Shop;
