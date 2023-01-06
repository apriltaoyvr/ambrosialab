import styled from 'styled-components';
import { transparentize } from 'polished';
import { motion } from 'framer-motion';

export const Background = styled(motion.div)`
  border-top: 1px solid ${props => transparentize(0.25, props.theme.foreground)};
  border-bottom: 1px solid ${props => transparentize(0.25, props.theme.foreground)};
  backdrop-filter: blur(4px);
`;

export const StoryWrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
  background-color: hsla(11, 94%, 29%, 0.25);
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
