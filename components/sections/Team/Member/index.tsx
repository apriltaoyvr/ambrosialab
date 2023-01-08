import { useState, lazy } from 'react';
import Image from 'next/image';

/* Framer */
import { motion, AnimatePresence } from 'framer-motion';
import Modal from 'components/utility/Modal';
const MotionImage = motion(Image);

/* Styled Components */
import {
  Portrait,
  PortraitExtend,
  Description,
  TeamContent,
} from './index.styled';

const Member = ({ name, image, title, description }) => {
  const [modalOpen, setModalOpen] = useState(false);
  debugger;
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <TeamContent>
        <Portrait onClick={() => (modalOpen ? close() : open())}>
          <MotionImage
            src={`/images/team/${image}`}
            alt={name}
            width={150}
            height={150}
          />
        </Portrait>
        <motion.hgroup style={{ textAlign: 'center' }}>
          <motion.h3>{name}</motion.h3>
          <motion.span>{title}</motion.span>
        </motion.hgroup>
      </TeamContent>
      <AnimatePresence>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <PortraitExtend>
              <MotionImage
                src={`/images/team/${image}`}
                alt={name}
                width={150}
                height={150}
              />
            </PortraitExtend>
            <hgroup>
              <motion.h3>{name}</motion.h3>
              <motion.h5>{title}</motion.h5>
            </hgroup>
            <Description>{description}</Description>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Member;
