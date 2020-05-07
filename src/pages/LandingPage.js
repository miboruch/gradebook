import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LandingPage = () => {
  return (
    <StyledWrapper>
      <h1>Main page</h1>
      <p>This is main page</p>
    </StyledWrapper>
  );
};

export default LandingPage;
