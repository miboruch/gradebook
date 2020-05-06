import React from 'react';
import PropTypes from 'prop-types';

const AuthPage = ({ isRegister }) => {
  return <div>{isRegister ? <h1>Register</h1> : <h1>Login</h1>}</div>;
};

AuthPage.propTypes = {
  isRegister: PropTypes.bool
};

AuthPage.defaultProps = {
  isRegister: false
};

export default AuthPage;
