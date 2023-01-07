import { useState, lazy } from 'react';
import Image from 'next/image';

/* Framer */
import { motion } from 'framer-motion';
import { fadeItem } from 'components/utility/framer';
const Modal = lazy(() => import('components/utility/Modal'));
const MotionImage = motion(Image);

/* Styled Components */
import {
  Portrait,
  PortraitExtend,
  Description,
  TeamContent,
} from './index.styled';


const Member = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <TeamContent key={props.key} variants={fadeItem}>
        <Portrait onClick={() => (modalOpen ? close() : open())}>
          <MotionImage
            src={`/images/team/${props.image}`}
            alt={props.key}
            key={props.key}
            variants={fadeItem}
            width={150}
            height={150}
          />
        </Portrait>
        <motion.hgroup style={{ textAlign: 'center' }}>
          <motion.h3>{props.name}</motion.h3>
          <motion.span >
            {props.title}
          </motion.span>
        </motion.hgroup>
      </TeamContent>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          key={`Modal ${props.title}`}
        >
          <PortraitExtend>
            <MotionImage
              src={`/images/team/${props.image}`}
              alt={props.key}
              key={props.key}
              width={150}
              height={150}
            />
          </PortraitExtend>
          <hgroup>
            <motion.h3>{props.name}</motion.h3>
            <motion.h5>{props.title}</motion.h5>
          </hgroup>
          <Description>{props.description}</Description>
        </Modal>
      )}
    </>
  );
};

export default Member;
