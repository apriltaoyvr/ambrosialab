import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const StyledResearch = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  grid-template-columns: 1rem;
  gap: 2rem;
  margin: 2rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 25vw));
  }
`;

export const Logo = styled(Image)`
  transition: filter 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }
`;
