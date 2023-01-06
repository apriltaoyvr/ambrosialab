import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  align-self: center;
  justify-items: center;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 400px);
    justify-content: center;
    &:last-child {
      grid-column-start: 2;
    }
  }
`;

export const ItemWrapper = styled(motion.figure)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  place-items: center;

  img {
    transition: all 0.1s ease-out;
    border: 2px solid rgba(244, 205, 220, 0.75);
    box-shadow: 0 0 4px hsla(2deg 46% 40% / 1),
      0 0 4px hsla(2deg 46% 40% / 0.8), 0 0 6px hsla(2deg 46% 40% / 0.5);
  }
`;
