import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

/* Components and Styles */
import {
  StyledNav,
  StyledLinks,
  StyledIcon,
  NavFooter,
} from './Navbar.styled';

/* Icons */
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import LangMenu from './LangMenu/LangMenu';

const Navbar = ({}) => {
  const { t } = useTranslation();
  const router = useRouter();
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
