import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export const StyledNav = styled.nav`
  position: fixed;
  right: 0;

  width: 100%;
  height: ${(props) => (props.isCollapsed ? '100vh' : 'unset')};
  border: ${(props) =>
    props.isCollapsed ? '2px solid transparent' : '2px dashed transparent'};
  border-bottom: 2px dashed var(--fg);
  backdrop-filter: blur(${(props) => (props.isCollapsed ? '30px' : '4px')});
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);

  display: flex;
  flex-direction: ${(props) => (props.isCollapsed ? 'column' : 'row')};
  justify-content: space-between;
  align-items: ${(props) => (props.isCollapsed ? 'flex-start' : 'center')};
  z-index: 3;

  @media screen and (min-width: 1200px) {
    height: 100%;
    width: unset;
    flex-direction: column;
    gap: 1rem;
    border-bottom: none;
    border-left: 2px dashed var(--fg);
    font-size: 1.5rem;
    & .menu {
      display: none;
    }
  }
`;

export const StyledLinks = styled.div`
  display: ${(props) => (props.isCollapsed ? 'flex' : 'none')};
  flex-direction: column;
  align-self: center;
  padding: 1rem;

  text-shadow: 0px 2px 6px hsla(232, 14%, 31%, 0.2);

  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: flex-end;
  }

  & a {
    font-size: 3rem;

    @media screen and (min-width: 1200px) {
      font-size: 1.5rem;
    }
    &:hover {
      color: #eeffd5;
      text-shadow: 0px 0px 10px rgba(244, 205, 221, 0.25);
    }
  }

  & span {
    justify-items: center;

    &:hover {
      cursor: pointer;
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

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const NavFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  align-self: ${(props) => (props.isCollapsed ? 'center' : 'null')};
`;

export const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
`