import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

import Flags from './Flags';

import { useState } from 'react';

const Navbar = ({ innerRef }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const toggleNav = () => {
    setCollapsed(!collapsed);
  };

  const StyledNav = styled.nav`
    position: fixed;
    right: 0;

    width: 100%;
    height: ${collapsed ? '100vh' : 'unset'};
    border: ${collapsed ? '2px solid transparent' : '2px dashed transparent'};
    border-bottom: 2px dashed var(--fg);
    backdrop-filter: blur(${collapsed ? '30px' : '4px'});

    display: flex;
    flex-direction: ${collapsed ? 'column' : 'row'};
    justify-content: space-between;
    align-items: ${collapsed ? 'flex-start' : 'center'};
    padding: 0.5rem;
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

  const StyledLinks = styled.div`
    display: ${collapsed ? 'flex' : 'none'};
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
  `;

  const NavFooter = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
    align-self: ${collapsed ? 'center' : 'null'}
  `;

  const EmptyButton = styled.button`
    background: none;
    border: none;
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <StyledNav>
      {collapsed ? (
        <FontAwesomeIcon icon={faX} size='2x' onClick={toggleNav} fixedWidth />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          size='2x'
          style={{ maxHeight: '35px' }}
          onClick={toggleNav}
          fixedWidth
        />
      )}

      <StyledLinks>
        <Link href='/#about'>{t('section.about')}</Link>
        <Link href='/#research'>{t('section.research')}</Link>
        <Link href='/#story'>{t('section.story')}</Link>
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
