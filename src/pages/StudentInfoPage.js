import React from 'react';
import styled from 'styled-components';
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

const StudentInfoPage = () => {
  return (
    <StyledWrapper>
      <Header />
      <StudentInfoTable />
      <StudentGradesTable />
    </StyledWrapper>
  );
};

export default StudentInfoPage;
