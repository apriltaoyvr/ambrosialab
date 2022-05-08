import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
    & .menu {
      display: none;
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 1rem;
`;

const EmptyButton = styled.button`
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const Navbar = ({ innerRef }) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <StyledNav>
      <FontAwesomeIcon icon={faBars} size='2x' className='menu' />
      <StyledLinks className='link-wrapper'>
        <Link href='/#about'>{t('section.about')}</Link>
        <Link href='/#research'>{t('section.research')}</Link>
        <Link href='/#team'>{t('section.team')}</Link>
        <Link href='/#awards'>{t('section.awards')}</Link>
        <Link href='/#contact'>{t('section.contact')}</Link>
      </StyledLinks>

      <NavFooter>
        <Link href='/' locale={router.locale === 'it' ? 'en' : 'it'}>
          <EmptyButton>
            <Flags />
          </EmptyButton>
        </Link>
      </NavFooter>
    </StyledNav>
  );
};

export default Navbar;
