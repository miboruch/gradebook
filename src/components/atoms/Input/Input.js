import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, StyledInput } from './Input.styles';

const Input = ({
  type,
  value,
  name,
  handleChange,
  handleBlur,
  placeholder,
  isSearch,
  step,
  min,
  max
}) => (
  <InputWrapper isSearch={isSearch}>
    <StyledInput
      type={type}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      name={name}
      min={min}
      max={max}
      placeholder={placeholder}
      step={step}
    />
  </InputWrapper>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  placeholder: PropTypes.string,
  isSearch: PropTypes.bool,
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number
};

export default Input;
