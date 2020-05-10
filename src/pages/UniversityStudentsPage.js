import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getUniversityStudents } from '../actions/universityActions';
import Spinner from '../components/atoms/Spinner/Spinner';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fbfbfb;
`;

const UniversityStudentsPage = ({
  match,
  isLoading,
  universityStudents,
  getUniversityStudents
}) => {
  useEffect(() => {
    getUniversityStudents(match.params.id);
  }, []);
  return (
    <StyledWrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <p>Hello</p>
          <p>University students</p>
        </>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = ({ universityReducer: { isLoading, universityStudents } }) => {
  return { isLoading, universityStudents };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUniversityStudents: (universityID) => dispatch(getUniversityStudents(universityID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UniversityStudentsPage);
