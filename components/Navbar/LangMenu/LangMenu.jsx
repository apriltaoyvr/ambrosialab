import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import FadeIn from '../../FadeIn';
import { StyledMenu, Divider, Flag } from './LangMenu.styled';

const countryCodes = {
  en: 'us',
  it: 'it',
};

const Flags = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <StyledMenu>
      {isOpen ? (
        <>
          <FadeIn delay='1000'>
            {Object.entries(countryCodes)
              .filter(([key]) => key !== router.locale)
              .map(([key, value]) => (
                <Link href={`/`} key={key} locale={key}>
                  <Flag countryCode={value} height='30' onClick={closeMenu} />
                </Link>
              ))}
          </FadeIn>
          <Divider delay='500' />
        </>
      ) : (
        ''
      )}
      <Flag
        countryCode={`${countryCodes[router.locale]}`}
        height='30'
        onClick={toggleMenu}
      />
    </StyledMenu>
  );
};

export default Flags;
