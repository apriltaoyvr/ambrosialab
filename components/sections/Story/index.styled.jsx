import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Background = styled(motion.div)`
  border-top: 1px solid hsla(201, 100%, 95%, 0.75);
  border-bottom: 1px solid hsla(201, 100%, 95%, 0.75);
  background-color: hsl(0, 0%, 0%, 0.025);
  backdrop-filter: blur(4px);
  background-image: radial-gradient(
      at 40% 20%,
      hsla(28, 100%, 74%, 0.33) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 0%, hsla(212, 100%, 56%, 0.33) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 0.33) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 0.33) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 0.33) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(283, 48%, 66%, 0.33) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 0.33) 0px, transparent 50%);
`;

export const StoryWrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
`;

export const InnerWrapper = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const ParagraphWrapper = styled(motion.main)`
  padding: 2rem;
  max-width: 800px;
  & p {
    text-align: justify;
    padding-bottom: 2rem;
  }
  @media screen and (min-width: 1200px) {
    align-self: flex-start;
  }
`;
