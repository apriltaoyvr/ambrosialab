import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(196, 93, 93, 0.5);
  backdrop-filter: blur(12px);
  z-index: 10;
`;

export const StyledModal = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(25%, 500px, 90%);
  height: min-content;
  margin: auto;
  padding: 1rem 1rem 2rem 1rem;
  gap: 1rem;

  background: rgba(219, 157, 154, 0.25);
  border: 1px solid #f7a9a5;
  box-shadow: 0 4px 30px rgba(196, 93, 93, 0.1);
`;
export const WindowBar = styled.hgroup`
  display: flex;
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
