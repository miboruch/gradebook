import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getStudentInfo, getStudentGrades } from '../actions/studentActions';
import Spinner from '../components/atoms/Spinner/Spinner';
import Header from '../components/molecules/Header/Header';
import StudentInfoTable from '../components/tables/StudentInfoTable/StudentInfoTable';
import StudentGradesTable from '../components/tables/StudentGradesTable/StudentGradesTable';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StudentPage = ({
  match,
  getUserInfo,
  getStudentGrades,
  isLoading,
  studentInfo,
  studentGrades
}) => {
  useEffect(() => {
    getUserInfo(match.params.id);
    getStudentGrades(match.params.id);
  }, []);

  return (
    <StyledWrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {studentInfo && (
            <>
              <Header />
              <StudentInfoTable data={[studentInfo]} />
              <StudentGradesTable data={studentGrades} />
            </>
          )}
        </>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = ({ studentReducer: { isLoading, studentInfo, studentGrades } }) => {
  return { isLoading, studentInfo, studentGrades };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (userID) => dispatch(getStudentInfo(userID)),
    getStudentGrades: (userID) => dispatch(getStudentGrades(userID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);
