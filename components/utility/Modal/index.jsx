import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { StyledModal, WindowBar, WindowIcon } from './index.styled';
import Backdrop from './Backdrop';
import { faX } from '@fortawesome/pro-light-svg-icons';

const Modal = ({ modalOpen, handleClose, children }) => {
  return (
    <MotionConfig>
      <AnimatePresence>
        {modalOpen && (
          <Backdrop onClick={handleClose}>
            <StyledModal
              onClick={(e) => e.stopPropagation()}
              initial={{ y: '-25%', opacity: 0 }}
              animate={{ y: '0', opacity: 1 }}
              exit={{ y: '25%', opacity: 0 }}
              transition={{ type: 'spring', bounciness: 0, duration: 0.66 }}
            >
              <WindowBar>
                <motion.div whileTap={{ scale: 0.95 }} onClick={handleClose}>
                  <WindowIcon icon={faX} size='xl' />
                </motion.div>
                <p style={{ userSelect: 'none' }}>⠀⠀</p>
              </WindowBar>
              {children}
            </StyledModal>
          </Backdrop>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Modal;
