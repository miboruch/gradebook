import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../../style/theme';
import GlobalStyle from '../../style/GlobalStyle';
import SEO from '../SEO';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledWrapper>{children}</StyledWrapper>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
