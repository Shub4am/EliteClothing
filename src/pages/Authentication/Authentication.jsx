import React from 'react';

import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';
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
