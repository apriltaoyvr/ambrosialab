import { React, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

/* Components and Styles */
import {
  StyledNav,
  StyledLinks,
  StyledIcon,
  LogoWrapper,
  NavFooter,
} from './Navbar.styled';

/* Icons */
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import LangMenu from './LangMenu/LangMenu';

const Navbar = ({}) => {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNav = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeNav = () => {
    setIsCollapsed(false);
  };

  return (
    <StyledNav isCollapsed={isCollapsed}>
      {isCollapsed ? (
        <StyledIcon icon={faX} size='2x' onClick={toggleNav} />
      ) : (
        <StyledIcon icon={faBars} size='2x' onClick={toggleNav} />
      )}

      <StyledLinks isCollapsed={isCollapsed}>
        <LogoWrapper>
          <Link href='/'>
            <Image
              src={'/static/images/logo.svg'}
              alt='AmbrosiaLab Logo'
              width='50'
              height='50'
              onClick={closeNav}
            />
          </Link>
        </LogoWrapper>
        <Link href='/#about'>
          <a onClick={closeNav}>{t('section.about')}</a>
        </Link>
        <Link href='/#research'>
          <a onClick={closeNav}>{t('section.research')}</a>
        </Link>
        <Link href='/#story'>
          <a onClick={closeNav}>{t('section.story')}</a>
        </Link>
        <Link href='/#team'>
          <a onClick={closeNav}>{t('section.team')}</a>
        </Link>
        <Link href='/#awards'>
          <a onClick={closeNav}>{t('section.awards')}</a>
        </Link>
        <Link href='/#contact'>
          <a onClick={closeNav}>{t('section.contact')}</a>
        </Link>
      </StyledLinks>

      <NavFooter isCollapsed={isCollapsed}>
        <LangMenu />
      </NavFooter>
    </StyledNav>
  );
};

export default Navbar;
