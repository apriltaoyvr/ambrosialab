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
          <hgroup>
            <h3>{props.name}</h3>
            <h5>{props.title}</h5>
          </hgroup>
          <Description>{props.description}</Description>
        </Modal>
      )}
      <hgroup>
        <h3>{props.name}</h3>
        <h4>{props.title}</h4>
      </hgroup>
    </TeamContent>
  );
};

export default Member;
