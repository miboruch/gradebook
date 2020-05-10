import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import StudentInfoTable from '../components/tables/StudentInfoTable/StudentInfoTable';
import Header from '../components/molecules/Header/Header';
import StudentGradesTable from '../components/tables/StudentGradesTable/StudentGradesTable';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fbfbfb;
`;

const StudentInfoPage = ({ userInfo, userGrades }) => {
  return (
    <StyledWrapper>
      <Header />
      <StudentInfoTable data={[userInfo]} />
      <StudentGradesTable data={userGrades} />
    </StyledWrapper>
  );
};

const mapStateToProps = ({ userReducer: { userInfo, userGrades } }) => {
  return { userInfo, userGrades };
};

export default connect(mapStateToProps)(StudentInfoPage);
