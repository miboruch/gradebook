import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getStudentGrades, getUserInfo } from '../actions/userActions';
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

const StudentPage = ({ match, getUserInfo, getStudentGrades, isLoading, userInfo }) => {
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
          {userInfo && (
            <>
              <Header />
              <StudentInfoTable data={[userInfo]} />
              <StudentGradesTable />
            </>
          )}
        </>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = ({ userReducer: { isLoading, userInfo } }) => {
  return { isLoading, userInfo };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (userID) => dispatch(getUserInfo(userID)),
    getStudentGrades: (userID) => dispatch(getStudentGrades(userID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);
