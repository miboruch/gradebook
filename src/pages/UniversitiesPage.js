import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getUniversities } from '../actions/universityActions';

const UniversitiesPage = () => {
  return (
    <div>
      <p>UNIVERSITY</p>
      <p>UNIVERSITY</p>
    </div>
  );
};

const mapStateToProps = ({ universityReducer: { isLoading, universities, universitiesError } }) => {
  return { isLoading, universities, universitiesError };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUniversities: () => dispatch(getUniversities())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UniversitiesPage);
