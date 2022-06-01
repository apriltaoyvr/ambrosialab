import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ResearchCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  border: 1px solid rgba(244, 205, 221, 0.5);
  border-radius: 4px;
  transition: all 0.3s ease-out;

  & p {
    align-self: center;

    @media screen and (min-width: 1200px) {
      max-width: unset;
    }
  }

  &:last-child {
    grid-column-start: 2;
  }

  &:hover {
    border: 1px solid #f9e6ee;
    box-shadow: 0px 0px 10px rgba(244, 205, 221, 0.25);
  }
`;

export const ResearchIcon = styled(motion.figure)`
  font-size: 5rem;
  text-shadow: 1px 2px 2px hsl(2deg 46% 40%);
  text-align: center;
`;

export const StyledButton = styled(motion.button)`
  background: rgba(202, 168, 162, 0.1);
  color: var(--fg);
  border: 1px solid rgba(244, 205, 220, 0.75);
  border-radius: 4px;

  padding: 0.5rem;
  width: 75%;
  align-self: center;
  transition: all 0.1s ease-out;

  &:hover {
    cursor: pointer;
    border: 1px solid rgba(244, 205, 221, 1);
    background: rgba(208, 169, 163, 0.2);
  }
`;

export const StyledParagraph = styled(motion.p)`
  font-size: 1rem;
  padding: 1rem;

  @media screen and (min-width: 1200px) {
    font-size: 1rem;
  }
`;
