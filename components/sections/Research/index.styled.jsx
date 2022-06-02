import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Background = styled(motion.div)`
  background: linear-gradient(
    180deg,
    hsla(343, 50%, 49%, 1),
    hsla(343, 50%, 49%, 0.5)
  );
`;

export const StyledResearch = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    hsla(343, 50%, 49%, 1),
    hsla(343, 50%, 49%, 0.5)
  );
`;

export const ItemWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-bottom: 2.5rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-columns: 500px;
  }
`;

export const LogoWrapper = styled(motion.aside)`
  display: grid;
  gap: 2rem;
  margin: 2rem;
  grid-template-columns: 300px;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 500px));
  }
`;

export const Logo = styled(Image)`
  transition: filter 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }
`;
