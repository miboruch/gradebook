import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../../../actions/toggleActions';
import { StyledHamburger, InnerHamburger } from './Hamburger.styles';

const Hamburger = ({ isMenuOpen, toggleMenu }) => (
  <StyledHamburger onClick={() => toggleMenu()}>
    <InnerHamburger isOpen={isMenuOpen} />
  </StyledHamburger>
);

const mapStateToProps = ({ toggleReducer: { isMenuOpen } }) => {
  return { isMenuOpen };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => dispatch(toggleMenu())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
