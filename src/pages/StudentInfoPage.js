import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import StudentInfoTable from '../components/tables/StudentInfoTable/StudentInfoTable';
import Header from '../components/molecules/Header/Header';
import StudentGradesTable from '../components/tables/StudentGradesTable/StudentGradesTable';
import Spinner from '../components/atoms/Spinner/Spinner';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fbfbfb;
`;

const StudentInfoPage = ({ userInfo, userGrades, isLoading }) => {
  return (
    <StyledWrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {userInfo && userGrades && (
            <>
              <Header />
              <StudentInfoTable data={[userInfo]} />
              <StudentGradesTable data={userGrades} />
            </>
          )}
        </>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = ({ userReducer: { userInfo, userGrades, isLoading } }) => {
  return { userInfo, userGrades, isLoading };
};

export default connect(mapStateToProps)(StudentInfoPage);
