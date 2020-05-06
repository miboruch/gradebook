import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Layout from '../components/Layout/Layout';
import LoginBox from '../components/molecules/LoginBox/LoginBox';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthPage = ({ isRegister }) => {
  return (
    <StyledWrapper>
      {isRegister ? <h1>register</h1> : <LoginBox />}
    </StyledWrapper>
  );
};

AuthPage.propTypes = {
  isRegister: PropTypes.bool
};

AuthPage.defaultProps = {
  isRegister: false
};

export default AuthPage;
