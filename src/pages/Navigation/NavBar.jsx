import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './NavBar.scss';

const NavBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logoContainer" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="navLinksContainer">
          <Link className="navLink" to="/shop">
            SHOP
          </Link>
          <Link className="navLink" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
