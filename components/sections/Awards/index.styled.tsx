import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionWrapper = styled(motion.section)`
  align-items: center;
`;

export const AwardsWrapper = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: start;
  place-content: center;
  gap: 1rem;

  @media screen and (min-width: 1500px) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 400px);
  }
`;

export const Award = styled(motion.div)`
  display: flex;
  flex-direction: column;

  & span {
    font-size: 1.25rem;
    text-align: center;
  }
`;
