import styled from 'styled-components';

export const StyledHeading = styled.h1`
  font-size: 52px;
  letter-spacing: 1px;
  color: #2d2d2d;
  text-align: center;
`;

export const StyledButton = styled.button`
  width: 250px;
  height: 40px;
  margin-top: 3rem;
  border: none;
  background-color: #2eae83;
  color: #fff;
  font-family: 'Gilroy';
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 500;
  border-radius: 20px;
  cursor: pointer;
`;

export const ErrorParagraph = styled.p`
  font-size: 11px;
  color: tomato;
`;

export const SuccessParagraph = styled(ErrorParagraph)`
  color: ${({ theme }) => theme.color.main};
`;
