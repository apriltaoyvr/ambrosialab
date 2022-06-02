import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Background = styled(motion.div)`
  background: linear-gradient(
    180deg,
    hsla(343, 50%, 49%, 0.75) 10%,
    hsla(343, 50%, 49%, 0.9) 20%,
    hsla(343, 50%, 49%, 1) 50%,
    hsla(343, 50%, 49%, 1) 100%
  );
`;

export const StyledAbout = styled(motion.section)`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const IntroWrapper = styled(motion.main)`
  display: grid;

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ParagraphWrapper = styled(motion.article)`
  align-self: center;
  grid-column: 2 / span 2;

  & p {
    text-align: justify;
    padding-bottom: 2rem;
  }

  @media screen and (min-width: 1700px) {
    align-self: flex-start;
  }
`;
