import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Background = styled(motion.div)`
  border-top: 1px solid hsla(201, 100%, 95%, 0.75);
  border-bottom: 1px solid hsla(201, 100%, 95%, 0.75);
  backdrop-filter: blur(4px);
  background-color: hsl(342, 51%, 48%);
  background-image: radial-gradient(
      at 70% 70%,
      hsla(25, 77%, 60%, 0.5) 0px,
      transparent 50%
    ),
    radial-gradient(at 20% 82%, hsla(45, 88%, 65%, 0.5) 0px, transparent 50%),
    radial-gradient(at 52% 20%, hsla(343, 65%, 64%, 0.5) 0px, transparent 50%);
`;

export const StoryWrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
  background-color: hsla(342, 51%, 48%, 0.2);
`;

export const InnerWrapper = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const ParagraphWrapper = styled(motion.main)`
  padding: 2rem;
  max-width: 800px;
  & p {
    padding-bottom: 2rem;
    text-align: justify;
  }
  @media screen and (min-width: 1200px) {
    align-self: flex-start;
  }
`;
