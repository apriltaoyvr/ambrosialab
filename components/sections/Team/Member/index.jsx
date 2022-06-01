import { useTranslation } from 'next-i18next';

import { motion } from 'framer-motion';
import { fadeContainer, fadeItem } from '../../../utility/framer';

import { useState } from 'react';
import Modal from '../../../utility/Modal';

import {
  Portrait,
  PortraitExtend,
  Description,
  TeamContent,
} from './index.styled';

const Member = (props) => {
  const { t } = useTranslation('common');

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <TeamContent key={props.key} variants={fadeItem}>
      <Portrait
        image={props.image}
        onClick={() => (modalOpen ? close() : open())}
      />
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          contentLabel='Modal'
          key={`Modal ${props.title}`}
        >
          <PortraitExtend image={props.image} />
          <motion.h3>{props.name}</motion.h3>
          <motion.h5>{props.title}</motion.h5>
          <Description>{props.description}</Description>
        </Modal>
      )}
      <motion.hgroup>
        <motion.h3>{props.name}</motion.h3>
        <motion.h4>{props.title}</motion.h4>
      </motion.hgroup>
    </TeamContent>
  );
};

export default Member;
