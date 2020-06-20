import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { withRouter } from 'react-router';
import Input from '../../atoms/Input/Input';
import LoginScene from '../../atoms/LoginScene/LoginScene';
import { userLogin } from '../../../actions/authenticationActions';
import { LoginSchema } from '../../../utils/schemaValidation';
import * as FormStyles from '../../../style/sharedStyles';
import { StyledWrapper, StyledForm } from './LoginBox.styles';

const LoginBox = ({ history, userLogin, loginError }) => (
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

const mapStateToProps = ({ authenticationReducer: { loginError } }) => {
  return { loginError };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (values, history) => dispatch(userLogin(values, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginBox));
