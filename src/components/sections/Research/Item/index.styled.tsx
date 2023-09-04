import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ResearchCardWrapper = styled.div`
  &:last-child {
    grid-column-start: 2;
  }
`;

export const ResearchCard = styled(motion.div)`
  z-index: 0;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  padding: 1rem;

  border: 1px solid rgba(244, 205, 221, 0.5);

  transition: all 0.3s ease-out;

  &:hover {
    border: 1px solid #f9e6ee;
    box-shadow: 0px 0px 10px rgba(244, 205, 221, 0.25);
  }

  & p {
    align-self: center;

    @media screen and (min-width: 1200px) {
      max-width: unset;
    }
  }
`;

export const ResearchIcon = styled(motion.figure)`
  margin: 1rem;
  text-align: center;
  filter: drop-shadow(1px 2px 4px hsla(2deg 46% 40% / 0.8));
`;

export const StyledButton = styled(motion.button)`
  align-self: center;

  width: 75%;
  padding: 0.5rem;

  color: var(--fg);

  background: rgba(202, 168, 162, 0.1);
  border: 1px solid rgba(244, 205, 220, 0.75);

  transition: all 0.1s ease-out;

  &:hover {
    cursor: pointer;
    background: rgba(208, 169, 163, 0.2);
    border: 1px solid rgba(244, 205, 221, 1);
  }
`;

export const StyledParagraph = styled(motion.p)`
  padding: 1.25rem;
  font-size: 1rem;
  text-align: justify;
`;
