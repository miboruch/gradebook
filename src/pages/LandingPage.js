import React from 'react';
import styled from 'styled-components';
import * as FormStyles from '../style/sharedStyles';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  text-align: center;
`;

const LandingPage = ({ history }) => {
  return (
    <StyledWrapper>
      <h1>Zaloguj się</h1>
      <StyledParagraph>
        Aby zobaczyć swoje oceny, zaloguj się na swoje konto, które zostało dla Ciebie utworzone{' '}
        <br /> Przykładowe: <br />
        <strong>login:</strong> admin2, <strong>hasło:</strong> asdasd123
      </StyledParagraph>
      <FormStyles.StyledButton onClick={() => history.push('/login')}>
        Zaloguj się
      </FormStyles.StyledButton>
    </StyledWrapper>
  );
};

export default LandingPage;
