import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getUniversities } from '../actions/universityActions';
import Spinner from '../components/atoms/Spinner/Spinner';
import UniversitiesTable from '../components/tables/UniversitiesTable/UniversitiesTable';
import Header from '../components/molecules/Header/Header';
import Input from '../components/atoms/Input/Input';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fbfbfb;
`;

const UniversitiesPage = ({ isLoading, universities, universitiesError }) => {
  const [searchedUniversityName, setSearchedUniversityName] = useState('');

  const handleChange = (event) => {
    setSearchedUniversityName(event.target.value);
  };
  return (
    <StyledWrapper>
      <Header>
        <Input
          name={'universityName'}
          handleChange={handleChange}
          type={'text'}
          placeholder={'Szukaj uniwersytetu'}
          isSearch={true}
        />
      </Header>
      <UniversitiesTable
        data={universities.filter((university) =>
          university.universityName.includes(searchedUniversityName)
        )}
      />
    </StyledWrapper>
  );
};

const mapStateToProps = ({ universityReducer: { isLoading, universities, universitiesError } }) => {
  return { isLoading, universities, universitiesError };
};

export default connect(mapStateToProps)(UniversitiesPage);
