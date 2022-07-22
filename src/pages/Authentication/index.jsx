import React from 'react';

import SignUp from '../../components/SignUp';
import SignIn from '../../components/SignIn';
import './styles.scss';

const Authentication = () => {
  return (
    <div className="authenticationContainer">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
