import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  isOpen: boolean;
}

export const StyledNav = styled.nav<Props>`
  display: flex;
  position: fixed;
  right: 0;
  flex-direction: ${(props) => (props.isOpen ? 'column' : 'row')};
  align-items: ${(props) => (props.isOpen ? 'flex-start' : 'center')};
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
  z-index: 50;

  border: 2px solid transparent;
  border-bottom: ${(props) =>
    props.isOpen
      ? ''
      : `1px dashed
    hsla(201, 100%, 95%, 0.5)`};
  width: 100%;
  height: ${(props) => (props.isOpen ? '100vh' : 'unset')};
  backdrop-filter: blur(${(props) => (props.isOpen ? '30px' : '4px')});

  @media screen and (min-width: 1700px) {
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    border-bottom: none;
    border-left: 2px dashed hsla(201, 100%, 95%, 0.5);
    width: unset;
    height: 100%;
    font-size: 1.5rem;

    & .menu {
      display: none;
    }
  }
`;

export const StyledLinks = styled.div<Props>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 1rem;

  text-shadow: 0px 2px 6px hsla(232, 14%, 31%, 0.2);

  & a {
    font-size: 3rem;

    &:hover {
      text-shadow: 0px 0px 10px rgba(244, 205, 221, 0.25);
      color: #d9fda3;
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

export const NavFooter = styled.footer<Props>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-self: ${(props) => (props.isOpen ? 'center' : 'null')};
  padding: 1rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;
`;
