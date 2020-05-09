import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import Input from '../../atoms/Input/Input';
import LoginScene from '../../atoms/LoginScene/LoginScene';
import { userLogin } from '../../../actions/authenticationActions';

const StyledWrapper = styled.section`
  width: 90%;
  height: 95vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
  }
`;

const StyledHeading = styled.h1`
  font-size: 52px;
  letter-spacing: 1px;
  color: #2d2d2d;
`;

const StyledButton = styled.button`
  width: 250px;
  height: 40px;
  margin-top: 3rem;
  border: none;
  background-color: #2eae83;
  color: #fff;
  font-family: 'Gilroy';
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 500;
  border-radius: 20px;
  cursor: pointer;
`;

const ErrorParagraph = styled.p`
  font-size: 11px;
  color: tomato;
`;

const LoginBox = ({ userLogin, loginError }) => {
  return (
    <StyledWrapper>
      <Formik
        initialValues={{ login: '', password: '' }}
        onSubmit={(values, { resetForm }) => {
          userLogin(values);
          resetForm();
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <StyledForm>
            <StyledHeading>Login</StyledHeading>
            <Input
              handleChange={handleChange}
              handleBlur={handleBlur}
              type={'text'}
              value={values.login}
              name={'login'}
              placeholder={'login'}
            />
            <Input
              handleChange={handleChange}
              handleBlur={handleBlur}
              type={'password'}
              value={values.password}
              name={'password'}
              placeholder={'Password'}
            />
            <StyledButton>Submit</StyledButton>
            {loginError && <ErrorParagraph>Błędny login lub hasło</ErrorParagraph>}
          </StyledForm>
        )}
      </Formik>
      <LoginScene />
    </StyledWrapper>
  );
};

const mapStateToProps = ({ authenticationReducer: { loginError } }) => {
  return { loginError };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (values) => dispatch(userLogin(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox);
