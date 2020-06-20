import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, InnerButton } from './CloseButton.styles';

const CloseButton = ({ setBoxState }) => (
  <ButtonWrapper type='button' onClick={() => setBoxState(false)}>
    <InnerButton />
  </ButtonWrapper>
);

CloseButton.propTypes = {
  setBoxState: PropTypes.func.isRequired
};

export default CloseButton;
