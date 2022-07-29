import React, { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/CartIcon';
import CartDropdown from '../../components/CartDropdown';

import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase';

import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinks,
} from './styles.jsx';

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
