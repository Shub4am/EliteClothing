import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NavBar from './pages/Navigation';
import Authentication from './pages/Authentication';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
