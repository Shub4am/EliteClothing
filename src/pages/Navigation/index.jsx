import React, { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/CartIcon';
import CartDropdown from '../../components/CartDropdown';

import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase';

import './styles.scss';

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
          {currentUser ? (
            <span className="navLink" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="navLink" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
