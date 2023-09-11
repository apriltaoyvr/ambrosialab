import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { StyledMenu, Divider, Flag } from './index.styled';

import { fadeContainer, fadeItem } from '@/components/framer';

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
    <StyledMenu variants={fadeContainer} initial='hidden' animate='visible'>
      {isOpen ? (
        <AnimatePresence>
          {Object.entries(countryCodes)
            .filter(([key]) => key !== router.locale)
            .map(([key, value]) => (
              <motion.div key={key} variants={fadeItem}>
                <Link href={`/`} locale={key} scroll={false}>
                  <Flag countryCode={value} height='30' onClick={closeMenu} />
                </Link>
              </motion.div>
            ))}
          <Divider />
        </AnimatePresence>
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
