import styled from 'styled-components';
import Image from 'next/image';
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
    box-shadow: 0 0 4px hsla(2deg 46% 40% / 1), 0 0 4px hsla(2deg 46% 40% / 0.8),
      0 0 6px hsla(2deg 46% 40% / 0.5);
    transition: all 0.1s ease-out;
  }
`;

export const GalleryItem = styled(Image)`
  max-height: 25vh;
  border: 1px solid ${(props) => props.theme.foreground};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`;
