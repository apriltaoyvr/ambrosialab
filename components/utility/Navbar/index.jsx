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
} from './index.styled';

/* Icons */
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import LangMenu from './LangMenu';

const Navbar = ({}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <StyledNav isOpen={isOpen}>
      {isOpen ? (
        <StyledIcon icon={faX} size='2x' onClick={toggleNav} />
      ) : (
        <StyledIcon icon={faBars} size='2x' onClick={toggleNav} />
      )}

      <StyledLinks isOpen={isOpen}>
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
        <Link href='/#team' >
          <a onClick={closeNav}>{t('section.team')}</a>
        </Link>
        <Link href='/#awards'>
          <a onClick={closeNav}>{t('section.awards')}</a>
        </Link>
        <Link href='/#contact'>
          <a onClick={closeNav}>{t('section.contact')}</a>
        </Link>
      </StyledLinks>

      <NavFooter isOpen={isOpen}>
        <LangMenu />
      </NavFooter>
    </StyledNav>
  );
};

export default Navbar;
