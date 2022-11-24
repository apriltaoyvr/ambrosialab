import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-self: center;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 400px);
    &:last-child {
      grid-column-start: 2;
    }
  }
`;

export const ItemWrapper = styled(motion.figure)`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 1rem;

  img {
    border: 2px solid rgba(244, 205, 220, 0.75);
    transition: all 0.1s ease-out;
    box-shadow: 0 0 4px hsla(2deg 46% 40% / 1),
      0 0 4px hsla(2deg 46% 40% / 0.8), 0 0 6px hsla(2deg 46% 40% / 0.5);
  }
`;
