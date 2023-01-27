import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { transparentize } from 'polished';

export const StyledBackdrop = styled(motion.div)`
  position: fixed;
  z-index: 50;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: ${(props) => transparentize(0.2, props.theme.background)};
  backdrop-filter: blur(4px);
`;

export const StyledModal = styled(motion.div)`
  position: fixed;
  z-index: 50;

  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: clamp(25%, 600px, 90%);
  margin: auto;

  background: ${(props) => transparentize(0.1, props.theme.background)};
  border: 1px solid ${(props) => props.theme.secondary};
  box-shadow: 0 4px 30px
    ${(props) => transparentize(0.1, props.theme.background)};
`;

export const ContentWrapper = styled(motion.article)`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  margin: 1rem;
  
  & p {
    overflow-y: auto;
    max-width: 65ch;
    min-height: 2rem;
    max-height: 30vh;
  }
`;

export const WindowBar = styled.hgroup`
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

export const WindowIcon = styled(FontAwesomeIcon)`
  padding: 0.5rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
  }
`;
