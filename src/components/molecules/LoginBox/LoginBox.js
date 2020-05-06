import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Input from '../../atoms/Input/Input';

const StyledWrapper = styled.section`
  width: 90%;
  height: 95vh;
  display: flex;
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
  background-color: #72b55b;
  color: #fff;
  font-family: 'Gilroy';
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 500;
  border-radius: 20px;
  cursor: pointer;
`;

const LoginBox = () => {
  return (
    <StyledWrapper>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleBlur }) => (
          <StyledForm>
            <StyledHeading>Login</StyledHeading>
            <Input
              handleChange={handleChange}
              handleBlur={handleBlur}
              type={'text'}
              value={values.email}
              name={'email'}
              placeholder={'Email'}
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
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default LoginBox;
