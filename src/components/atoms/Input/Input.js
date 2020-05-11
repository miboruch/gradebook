import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  width: 300px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.searchBar};
  border: ${({ isDarkTheme }) => (isDarkTheme ? '1px solid #555' : 'none')};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ isSearch }) => (isSearch ? '0' : '2rem')};
  flex-direction: row;
  border-radius: 20px;
  transition: all 0.4s ease;

  ${({ theme }) => theme.mq.tablet} {
    width: 550px;
  }

  ${({ theme }) => theme.mq.standard} {
    width: 450px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  padding-left: 2rem;
  font-size: 14px;
  color: ${({ theme }) => theme.color.fontColor};
  font-family: 'Gilroy';
  &::placeholder {
    font-size: 13px;
    position: absolute;
    color: #c9c9c9;
  }
  &:focus {
    outline: none;
  }
`;

const Input = ({ type, value, name, handleChange, handleBlur, placeholder, isSearch }) => {
  return (
    <InputWrapper isSearch={isSearch}>
      <StyledInput
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  placeholder: PropTypes.string,
  isSearch: PropTypes.bool
};

export default Input;
