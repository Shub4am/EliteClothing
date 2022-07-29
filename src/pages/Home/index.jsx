import React from 'react';
import { Outlet } from 'react-router-dom';
import Directory from '../../components/Directory';

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
};

export default Home;
