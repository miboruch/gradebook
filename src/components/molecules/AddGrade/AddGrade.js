import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import Input from '../../atoms/Input/Input';
import { addStudentGrade } from '../../../actions/studentActions';
import { NewGradeSchema } from '../../../utils/schemaValidation';
import * as FormStyles from '../../../style/sharedStyles';
import { StyledForm, StyledGradeWrapper } from './AddGrade.styles';

const AddGrade = ({ isOpen, setOpen, token, addGradeError, addStudentGrade, studentInfo }) => {
  const [isSuccess, setSuccess] = useState(false);
  return (
    <StyledGradeWrapper isOpen={isOpen}>
      <CloseButton setBoxState={setOpen} />
      <Formik
        initialValues={{ grade: null, subject: '' }}
        onSubmit={(values, { resetForm }) => {
          addStudentGrade(token, values.subject, values.grade, studentInfo.userId);
          resetForm();
          setOpen(false);
        }}
        validationSchema={NewGradeSchema}
      >
        {({ values, handleChange, handleBlur, errors }) => (
          <StyledForm>
            <FormStyles.StyledHeading>
              Dodaj ocenę dla {studentInfo.albumNo}
            </FormStyles.StyledHeading>
            <Input
              handleChange={handleChange}
              handleBlur={handleBlur}
              type={'number'}
              step={0.5}
              min={2}
              max={5}
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
            <FormStyles.StyledButton>Dodaj</FormStyles.StyledButton>
            {(errors.grade || errors.subject) && (
              <FormStyles.ErrorParagraph>Dane są niepoprawne</FormStyles.ErrorParagraph>
            )}
            {addGradeError && (
              <FormStyles.ErrorParagraph>Problem z dodaniem oceny</FormStyles.ErrorParagraph>
            )}
            {isSuccess && <FormStyles.SuccessParagraph>Dodano</FormStyles.SuccessParagraph>}
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
