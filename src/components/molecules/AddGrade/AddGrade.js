import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { connect } from 'react-redux';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import Input from '../../atoms/Input/Input';
import { addStudentGrade } from '../../../actions/studentActions';

const StyledGradeWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 1s ease;
  z-index: 10;
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

const AddGrade = ({ isOpen, setOpen, token, addGradeError, addStudentGrade, studentInfo }) => {
  return (
    <StyledGradeWrapper isOpen={isOpen}>
      <CloseButton setBoxState={setOpen} />
      <Formik
        initialValues={{ grade: null, subject: '' }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <StyledForm>
            <StyledHeading>Dodaj ocenę dla {studentInfo.albumNo}</StyledHeading>
            <Input
              handleChange={handleChange}
              handleBlur={handleBlur}
              type={'number'}
              value={values.grade}
              name={'grade'}
              placeholder={'Ocena'}
            />
            <Input
              handleChange={handleChange}
              handleBlur={handleBlur}
              type={'text'}
              value={values.subject}
              name={'subject'}
              placeholder={'Przedmiot'}
            />
            <StyledButton>Dodaj</StyledButton>
            {addGradeError && <ErrorParagraph>Problem z dodaniem oceny</ErrorParagraph>}
          </StyledForm>
        )}
      </Formik>
    </StyledGradeWrapper>
  );
};

AddGrade.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

const mapStateToProps = ({
  authenticationReducer: { token },
  studentReducer: { addGradeError, studentInfo }
}) => {
  return { addGradeError, token, studentInfo };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addStudentGrade: (token, subject, grade, studentId) =>
      dispatch(addStudentGrade(token, subject, grade, studentId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddGrade);
