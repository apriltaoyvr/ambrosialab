import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledBackdrop = styled(motion.div)`

  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 10;

  background: rgba(196, 93, 93, 0.5);
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(12px);
`;

export const StyledModal = styled(motion.div)`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  margin: auto;
  border: 1px solid #f7a9a5;
  box-shadow: 0 4px 30px rgba(196, 93, 93, 0.1);

  background: rgba(219, 157, 154, 0.25);
  padding: 1rem 2rem 2rem 1rem;
  width: clamp(25%, 600px, 90%);
  height: clamp(25%, 500px, 90%);

  overflow-y: scroll;
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
  &:hover {
    cursor: pointer;
  }
`;
