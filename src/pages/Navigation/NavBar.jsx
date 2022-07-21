import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './NavBar.scss';

const NavBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logoContainer" to="/">
          <div>
            <CrwnLogo className="logo" />
          </div>
        </Link>
        <div className="navLinksContainer">
          <Link className="navLink" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
