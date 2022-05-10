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
  EmptyButton
} from './Navbar.styled';

/* Icons */
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import Flags from './Flags';


const Navbar = ({ innerRef }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const toggleNav = () => {
    setCollapsed(!collapsed);
  };

  return (
    <StyledNav collapsed={collapsed}>
      {collapsed ? (
        <StyledIcon icon={faX} size='2x' onClick={toggleNav} />
      ) : (
        <StyledIcon icon={faBars} size='2x' onClick={toggleNav} />
      )}

      <StyledLinks collapsed={collapsed}>
        <Link href='/#about'>{t('section.about')}</Link>
        <Link href='/#research'>{t('section.research')}</Link>
        <Link href='/#story'>{t('section.story')}</Link>
        <Link href='/#team'>{t('section.team')}</Link>
        <Link href='/#awards'>{t('section.awards')}</Link>
        <Link href='/#contact'>{t('section.contact')}</Link>
      </StyledLinks>

      <NavFooter collapsed={collapsed}>
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
