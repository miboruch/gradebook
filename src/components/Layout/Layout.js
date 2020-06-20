import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../../style/theme';
import GlobalStyle from '../../style/GlobalStyle';
import SEO from '../SEO';
import Hamburger from '../atoms/Hamburger/Hamburger';
import Slider from '../molecules/Slider/Slider';
import { StyledWrapper, ContentWrapper } from './Layout.styles';

const Layout = ({ children }) => (
  <>
    <SEO />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <Hamburger />
        <Slider />
        <ContentWrapper>{children}</ContentWrapper>
      </StyledWrapper>
    </ThemeProvider>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
