import styled from 'styled-components';

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

export {
  StyledHeader,
  Wrapper,
  StyledInfoBox,
  StyledParagraph,
  StyledSmallParagraph,
  StyledContentWrapper
};
