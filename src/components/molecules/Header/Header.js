import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ChartIcon from '../../../assets/icons/chart.svg';

const StyledHeader = styled.header`
  width: 100%;
  height: 150px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: row;
  background: #fff;
  transition: all 0.4s ease;

  ${({ theme }) => theme.mq.standard} {
    padding: 0 3rem;
    justify-content: space-between;
    height: 120px;
  }
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const StyledInfoBox = styled.div`
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  display: none;
  color: inherit;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }
`;

const StyledParagraph = styled.p`
  font-size: 16px;
  margin: 0;
  padding: 0;
  text-align: right;
`;

const StyledSmallParagraph = styled(StyledParagraph)`
  font-size: 14px;
`;

const StyledContentWrapper = styled.section`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: ${({ theme }) => theme.color.main};

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
  }
`;

const StyledChatIcon = styled(ChartIcon)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.color.main};
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
`;

const Header = ({ children }) => {
  return (
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
};

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
