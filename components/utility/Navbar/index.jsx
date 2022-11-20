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
        <Link href='/#about' onClick={closeNav}>
          {t('section.about')}
        </Link>
        <Link href='/#research' onClick={closeNav}>
          {t('section.research')}
        </Link>
        <Link href='/#story' onClick={closeNav}>
          {t('section.story')}
        </Link>
        <Link href='/#team' onClick={closeNav}>
          {t('section.team')}
        </Link>
        <Link href='/#awards' onClick={closeNav}>
          {t('section.awards')}
        </Link>
        <Link href='/#contact' onClick={closeNav}>
          {t('section.contact')}
        </Link>
      </StyledLinks>

      <NavFooter isOpen={isOpen}>
        <LangMenu />
      </NavFooter>
    </StyledNav>
  );
};

export default Navbar;
