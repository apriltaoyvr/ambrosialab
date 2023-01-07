import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Background = styled(motion.div)`
  background: ${(props) => props.theme.background};
`;

export const StyledAbout = styled(motion.section)`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

export const IntroWrapper = styled(motion.main)`
  display: grid;

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ParagraphWrapper = styled(motion.article)`
  grid-column: 2 / span 2;
  align-self: center;
  max-width: 65ch;

  & p {
    padding-bottom: 2rem;
    text-align: justify;
  }

  @media screen and (min-width: 1700px) {
    align-self: flex-start;
  }
`;
