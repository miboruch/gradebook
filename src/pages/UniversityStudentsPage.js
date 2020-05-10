import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getUniversityStudents, setCurrentUniversity } from '../actions/universityActions';
import Spinner from '../components/atoms/Spinner/Spinner';
import Header from '../components/molecules/Header/Header';
import UniversityStudentsTable from '../components/tables/UniversityStudentsTable/UniversityStudentsTable';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fbfbfb;
`;

const StyledHeading = styled.h1`
  font-size: 28px;
  color: #2d2d2d;
`;

const UniversityStudentsPage = ({
  match,
  isLoading,
  universityStudents,
  getUniversityStudents,
  currentUniversity,
  setCurrentUniversity,
  universities
}) => {
  useEffect(() => {
    getUniversityStudents(match.params.id);

    if (!currentUniversity) {
      const { universityName } = universities.find(
        (university) => university.universityId === parseInt(match.params.id)
      );

      setCurrentUniversity(universityName);
    }
  }, []);
  return (
    <StyledWrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <StyledHeading>{currentUniversity}</StyledHeading>
          <UniversityStudentsTable data={universityStudents} />
        </>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = ({
  universityReducer: { isLoading, universityStudents, currentUniversity, universities }
}) => {
  return { isLoading, universityStudents, currentUniversity, universities };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUniversityStudents: (universityID) => dispatch(getUniversityStudents(universityID)),
    setCurrentUniversity: (universityName) => dispatch(setCurrentUniversity(universityName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UniversityStudentsPage);
