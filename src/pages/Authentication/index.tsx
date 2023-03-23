import React from 'react';

import SignUp from '../../components/SignUp';
import SignIn from '../../components/SignIn';
import { AuthenticationContainer } from './styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
