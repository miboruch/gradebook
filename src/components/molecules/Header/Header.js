import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledHeader,
  Wrapper,
  StyledInfoBox,
  StyledParagraph,
  StyledSmallParagraph,
  StyledContentWrapper
} from './Header.styles';

const Header = ({ children }) => (
  <StyledHeader>
    <Wrapper>{children}</Wrapper>
    <StyledContentWrapper>
      <StyledInfoBox>
        <StyledParagraph>Państwowa Wyższa Szkoła Zawodowa w Tarnowie</StyledParagraph>
        <StyledSmallParagraph>Technologie obiektowe i komponentowe, 2020</StyledSmallParagraph>
      </StyledInfoBox>
    </StyledContentWrapper>
  </StyledHeader>
);

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
