import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionWrapper = styled(motion.section)`
  align-items: center;
`;

export const AwardsWrapper = styled(motion.main)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  place-content: center;
  align-items: start;

  @media screen and (min-width: 1500px) {
    display: grid;
    grid-template-columns: repeat(3, 400px);
    justify-content: center;
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
