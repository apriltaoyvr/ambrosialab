import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { transparentize } from 'polished';

export const StyledBackdrop = styled(motion.div)`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 50;

  background: ${props => transparentize(0.2, props.theme.background)};
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
`;

export const StyledModal = styled(motion.div)`
  display: flex;
  position: fixed;
  flex-direction: column;
  place-content: center;
  align-items: center;
  z-index: 50;
  margin: auto;
  border: 1px solid ${(props) => props.theme.secondary};
  box-shadow: 0 4px 30px
    ${(props) => transparentize(0.1, props.theme.background)};

  background: ${(props) => transparentize(0.1, props.theme.background)};
  width: clamp(25%, 600px, 90%);
  height: clamp(25%, 500px, 90%);

  overflow-y: scroll;
`;

export const ContentWrapper = styled(motion.article)`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  padding: 2rem;
  max-width: 65ch;
`;

export const WindowBar = styled.hgroup`
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const WindowIcon = styled(FontAwesomeIcon)`
  transition: color 0.2s ease-in-out;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

