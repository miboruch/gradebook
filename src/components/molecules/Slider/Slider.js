import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Button from '../../atoms/Button/Button';
import { userLogout } from '../../../actions/authenticationActions';
import { toggleMenu } from '../../../actions/toggleActions';
import {
  StyledWrapper,
  StyledHeading,
  IconWrapper,
  StyledUserIcon,
  StyledNameHeading,
  StyledDescriptionParagraph,
  StyledClipboardIcon,
  ButtonWrapper,
  StyledProjectLink,
  BottomButtonWrapper
} from './Slider.styles';

const Slider = ({ isMenuOpen, isLoggedIn, userInfo, history, userLogout }) => {
  return (
    <StyledWrapper isOpen={isMenuOpen}>
      <StyledProjectLink to={'/'}>
        <StyledHeading>Technologie obiektowe i komponentowe</StyledHeading>
      </StyledProjectLink>
      {userInfo && (
        <>
          <IconWrapper>
            <StyledUserIcon />
          </IconWrapper>
          <StyledNameHeading>
            {userInfo.name} {userInfo.lastName}
          </StyledNameHeading>
          <StyledDescriptionParagraph>
            {userInfo.admin ? 'Wykładowca' : 'Student'}
          </StyledDescriptionParagraph>
        </>
      )}
      <ButtonWrapper>
        <StyledProjectLink to={'/'}>
          <Button isMenu={true}>
            <StyledClipboardIcon />
            Strona główna
          </Button>
        </StyledProjectLink>
      </ButtonWrapper>
      {isLoggedIn ? (
        <>
          <ButtonWrapper>
            {userInfo && userInfo.admin ? (
              <StyledProjectLink to={'/'}>
                <Button isMenu={true}>
                  <StyledClipboardIcon />
                  Lista studentów
                </Button>
              </StyledProjectLink>
            ) : (
              <StyledProjectLink to={'/'}>
                <Button isMenu={true}>
                  <StyledClipboardIcon />
                  Zobacz swoje oceny
                </Button>
              </StyledProjectLink>
            )}
          </ButtonWrapper>
          <BottomButtonWrapper>
            <Button isMenu={true} onClick={() => userLogout(history)}>
              Wyloguj
            </Button>
          </BottomButtonWrapper>
        </>
      ) : (
        <BottomButtonWrapper>
          <StyledProjectLink to={'/login'}>
            <Button isMenu={true}>
              <StyledClipboardIcon />
              Zaloguj się
            </Button>
          </StyledProjectLink>
        </BottomButtonWrapper>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = ({
  toggleReducer: { isMenuOpen },
  authenticationReducer: { isLoggedIn },
  userReducer: { userInfo }
}) => {
  return { isMenuOpen, isLoggedIn, userInfo };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: (history) => dispatch(userLogout(history)),
    toggleMenu: () => dispatch(toggleMenu())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Slider));
