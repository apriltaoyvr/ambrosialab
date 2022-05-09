import styled from 'styled-components';
import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

const StyledModal = styled(motion.div)`
  width: clamp(50%, 700px, 90%);
  height: min(50%, 300px);

  margin: auto;
  padding: 0 2rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const dropIn = {
  hidden: {
    opacity: ' 0',
  },
  visible: {
    y: '0',
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    opacity: '0',
  },
};

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <StyledModal
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <p>{text}</p>
      </StyledModal>
    </Backdrop>
  );
};

export default Modal;
