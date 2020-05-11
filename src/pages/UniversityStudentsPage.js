import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getUniversityStudents, setCurrentUniversity } from '../actions/universityActions';
import Spinner from '../components/atoms/Spinner/Spinner';
import Header from '../components/molecules/Header/Header';
import UniversityStudentsTable from '../components/tables/UniversityStudentsTable/UniversityStudentsTable';
import Input from '../components/atoms/Input/Input';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fbfbfb;
`;

const StyledHeading = styled.h1`
  font-size: 42px;
  margin-top: 2rem;
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
  const [searchedAlbum, setSearchedAlbum] = useState('');

  useEffect(() => {
    getUniversityStudents(match.params.id);

    if (!currentUniversity) {
      const { universityName } = universities.find(
        (university) => university.universityId === parseInt(match.params.id)
      );

      setCurrentUniversity(universityName);
    }
  }, []);

  const handleChange = (event) => {
    setSearchedAlbum(event.target.value);
  };

  return (
    <StyledWrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header>
            <Input
              name={'studentsPicker'}
              handleChange={handleChange}
              type={'text'}
              placeholder={'Numer albumu'}
              isSearch={true}
            />
          </Header>
          <StyledHeading>{currentUniversity}</StyledHeading>
          <UniversityStudentsTable
            data={universityStudents.filter((student) => student.albumNo.includes(searchedAlbum))}
          />
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
