import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Modal from 'react-modal';
import {
  Portrait,
  PortraitExtend,
  Description,
  TeamContent,
  customStyles
} from './Team.styled.jsx';

const Team = (props) => {
  const { t } = useTranslation('common');

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <TeamContent>
      <Portrait image={props.image} onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Modal'
        style={customStyles}
      >
        <PortraitExtend image={props.image} />
        <h2>{props.name}</h2>
        <h3>{props.title}</h3>
        <Description>{props.description}</Description>
      </Modal>
      <hgroup>
        <h3>{props.name}</h3>
        <h4>{props.title}</h4>
      </hgroup>
    </TeamContent>
  );
};

export default Team;
