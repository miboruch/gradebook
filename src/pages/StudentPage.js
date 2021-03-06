import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getStudentInfo, getStudentGrades } from '../actions/studentActions';
import Spinner from '../components/atoms/Spinner/Spinner';
import Header from '../components/molecules/Header/Header';
import StudentInfoTable from '../components/tables/StudentInfoTable/StudentInfoTable';
import StudentGradesTable from '../components/tables/StudentGradesTable/StudentGradesTable';
import Button from '../components/atoms/Button/Button';
import { ReactComponent as AddIcon } from '../assets/icons/add.svg';
import AddGrade from '../components/molecules/AddGrade/AddGrade';

const StyledWrapper = styled.div`
  height: calc(100vh - 170px);
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fbfbfb;

  ${({ theme }) => theme.mq.standard} {
    height: calc(100% - 140px);
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;

const StyledAddIcon = styled(AddIcon)`
  width: 25px;
  height: 25px;
`;

const StudentPage = ({
  match,
  getUserInfo,
  getStudentGrades,
  isLoading,
  studentInfo,
  studentGrades
}) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    getUserInfo(match.params.id);
    getStudentGrades(match.params.id);
  }, []);

  return (
    <>
      <Header>
        <ButtonWrapper>
          <Button onClick={() => setOpen(!isOpen)}>
            <StyledAddIcon />
            Dodaj ocenę
          </Button>
        </ButtonWrapper>
      </Header>
      <StyledWrapper>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {studentInfo && studentGrades && (
              <>
                <AddGrade setOpen={setOpen} isOpen={isOpen} />
                <StudentInfoTable data={[studentInfo]} />
                <StudentGradesTable data={studentGrades} />
              </>
            )}
          </>
        )}
      </StyledWrapper>
    </>
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
