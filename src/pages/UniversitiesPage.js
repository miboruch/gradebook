import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getUniversities } from '../actions/universityActions';
import Spinner from '../components/atoms/Spinner/Spinner';
import UniversitiesTable from '../components/tables/UniversitiesTable/UniversitiesTable';
import Header from '../components/molecules/Header/Header';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fbfbfb;
`;

const UniversitiesPage = ({ isLoading, universities, universitiesError }) => {
  return (
    <StyledWrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <UniversitiesTable data={universities} />
        </>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = ({ universityReducer: { isLoading, universities, universitiesError } }) => {
  return { isLoading, universities, universitiesError };
};

export default connect(mapStateToProps)(UniversitiesPage);
