import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleMenu } from '../../../actions/toggleActions';

const StyledButton = styled.button`
  width: 230px;
  height: 45px;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  position: relative;
  font-family: 'Gilroy';
  color: ${({ theme }) => theme.color.main};
  overflow: hidden;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  padding-left: 4rem;
  margin-bottom: 2rem;
  z-index: 7;
  -webkit-box-shadow: 2px 2px 6px 0px rgba(4, 138, 131, 1);
  -moz-box-shadow: 2px 2px 6px 0px rgba(4, 138, 131, 1);
  box-shadow: 2px 2px 6px 0px rgba(4, 138, 131, 1);
  transition: all 0.4s ease;
  &:hover {
    color: ${({ theme }) => theme.color.main};
    transition: color 0.14s ease;
  }
  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: #fff;
    transition: all 0.25s ease;
    z-index: -1;
  }
  &:hover::before {
    height: 100%;
    transition: all 0.25s ease;
  }
  ${({ isMenuButton }) =>
    isMenuButton &&
    css`
      color: #fff;
      background-color: transparent;
      width: 100%;
      height: 62px;
      margin-bottom: 0;
      border-radius: 0;
      border: none;
      box-shadow: none;
    `}

  ${({ isMenuButton }) =>
    !isMenuButton &&
    css`
      border: none;
      -webkit-box-shadow: 2px 2px 6px 0px rgba(25, 21, 22, 1);
      -moz-box-shadow: 2px 2px 6px 0px rgba(25, 21, 22, 1);
      box-shadow: 2px 2px 6px 0px rgba(25, 21, 22, 1);
    `}
  
  &:focus {
    outline: none;
  }
`;

const Button = ({ children, onClick, isMenu, toggleMenu }) => {
  return (
    <StyledButton
      onClick={() => {
        onClick && onClick();
        isMenu && toggleMenu();
      }}
      isMenuButton={isMenu}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  isMenu: PropTypes.bool
};

Button.defaultProps = {
  isMenu: false
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => dispatch(toggleMenu())
  };
};

export default connect(null, mapDispatchToProps)(Button);
