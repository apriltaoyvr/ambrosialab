import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Flags from './Flags';

const StyledNav = styled.nav`
  border: 2px dashed transparent;
  border-bottom: 2px dashed var(--fg);
  backdrop-filter: blur(4px);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  @media screen and (min-width: 1200px) {
    height: 100%;
    flex-direction: column;
    gap: 1rem;
    border-bottom: none;
    border-left: 2px dashed var(--fg);
    font-size: 1.25rem;
    & .homebutton {
      display: none;
    }
  }
`;

const StyledLinks = styled.div`
  text-shadow: 0px 1px 2px hsl(2deg 46% 42%);
  text-align: right;
  padding: 1rem;

  @media screen and (max-width: 1200px) {
    display: none;
  }

  & p {
    font-size: 1.5rem;

    @media screen and (min-width: 1600px) {
      font-size: 1.75rem;
    }
  }
`;

const NavFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const NavSocials = styled.div`
  display: flex;
  gap: 1rem;
`;

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <StyledNav>
      <FontAwesomeIcon icon={faBars} size='2x' className='homebutton' />
      <StyledLinks className='link-wrapper'>
        <p>Home</p>
        <p>About</p>
        <p>Research</p>
        <p>Team</p>
        <p>Awards</p>
        <p>Contact</p>
      </StyledLinks>
      <NavFooter>
        <NavSocials className='socials'>
          <FontAwesomeIcon icon={faPhone} size='xl' />
          <FontAwesomeIcon icon={faEnvelope} size='xl' />
        </NavSocials>
        <Flags />
      </NavFooter>
    </StyledNav>
  );
};

export default Navbar;
