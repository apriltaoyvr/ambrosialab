import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import {
  StyledBackdrop,
  StyledModal,
  ContentWrapper,
  WindowBar,
  WindowIcon,
} from './index.styled';
import { faX } from '@fortawesome/pro-light-svg-icons';

const Modal = ({ modalOpen, handleClose, children }) => {
  return (
    <MotionConfig>
      <AnimatePresence>
        {modalOpen && (
          <StyledBackdrop
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <StyledModal
              onClick={(e) => e.stopPropagation()}
              initial={{ y: '-25%', opacity: 0 }}
              animate={{ y: '0', opacity: 1 }}
              exit={{ y: '25%', opacity: 0 }}
              transition={{ type: 'spring', duration: 0.66 }}
            >
              <WindowBar>
                <motion.div whileTap={{ scale: 0.95 }} onClick={handleClose}>
                  <WindowIcon icon={faX} size='xl' />
                </motion.div>
              </WindowBar>
              <ContentWrapper>{children}</ContentWrapper>
            </StyledModal>
          </StyledBackdrop>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Modal;
