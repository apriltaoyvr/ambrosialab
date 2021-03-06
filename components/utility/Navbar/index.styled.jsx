import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledNav = styled.nav`
  position: fixed;
  right: 0;
  width: 100%;
  height: ${(props) => (props.isOpen ? '100vh' : 'unset')};
  z-index: 3;

  border: 2px solid transparent;
  border-bottom: ${(props) =>
    props.isOpen
      ? ''
      : `1px dashed
    hsla(201, 100%, 95%, 0.5)`};
  backdrop-filter: blur(${(props) => (props.isOpen ? '30px' : '4px')});
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);

  display: flex;
  flex-direction: ${(props) => (props.isOpen ? 'column' : 'row')};
  align-items: ${(props) => (props.isOpen ? 'flex-start' : 'center')};

  @media screen and (min-width: 1700px) {
    height: 100%;
    width: unset;
    flex-direction: column;
    gap: 1rem;
    border-bottom: none;
    border-left: 2px dashed hsla(201, 100%, 95%, 0.5);
    font-size: 1.5rem;
    justify-content: space-between;

    & .menu {
      display: none;
    }
  }
`;

export const StyledLinks = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-self: center;
  align-items: center;
  padding: 1rem;

  text-shadow: 0px 2px 6px hsla(232, 14%, 31%, 0.2);

  & a {
    font-size: 3rem;

    &:hover {
      color: #eeffd5;
      text-shadow: 0px 0px 10px rgba(244, 205, 221, 0.25);
    }
  }

  & span:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 1700px) {
    display: flex;
    & a {
      font-size: 1.5rem;
    }
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  margin: 1rem;
  max-width: 30px;
  max-height: 30px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 1700px) {
    display: none;
  }
`;

export const NavFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  align-self: ${(props) => (props.isOpen ? 'center' : 'null')};
`;

export const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
`;
