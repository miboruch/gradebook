import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout/Layout';

const AuthPage = ({ isRegister }) => {
  return <Layout>{isRegister ? <h1>Register</h1> : <h1>Login</h1>}</Layout>;
};

AuthPage.propTypes = {
  isRegister: PropTypes.bool
};

AuthPage.defaultProps = {
  isRegister: false
};

export default AuthPage;
