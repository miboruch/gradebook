import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { withRouter } from 'react-router';
import Input from '../../atoms/Input/Input';
import LoginScene from '../../atoms/LoginScene/LoginScene';
import { userLogin } from '../../../actions/authenticationActions';
import { LoginSchema } from '../../../utils/schemaValidation';
import * as FormStyles from '../../../style/sharedStyles';

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

const LoginBox = ({ history, userLogin, loginError }) => {
  return (
    <StyledWrapper>
      <Formik
        initialValues={{ login: '', password: '' }}
        onSubmit={(values, { resetForm }) => {
          userLogin(values, history);
          resetForm();
        }}
        validationSchema={LoginSchema}
      >
        {({ values, handleChange, handleBlur }) => (
          <StyledForm>
            <FormStyles.StyledHeading>Login</FormStyles.StyledHeading>
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
            <FormStyles.StyledButton>Submit</FormStyles.StyledButton>
            {loginError && (
              <FormStyles.ErrorParagraph>Błędny login lub hasło</FormStyles.ErrorParagraph>
            )}
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
    userLogin: (values, history) => dispatch(userLogin(values, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginBox));
