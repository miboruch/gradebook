import React from 'react';
import styled from 'styled-components';
import StudentInfoTable from '../components/tables/StudentInfoTable/StudentInfoTable';
import Header from '../components/molecules/Header/Header';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
`;

const StudentInfoPage = () => {
  return (
    <StyledWrapper>
      <Header />
      <StudentInfoTable />
    </StyledWrapper>
  );
};

export default StudentInfoPage;
