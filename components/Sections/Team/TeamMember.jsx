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
    <TeamContent key={props.key}>
      <Portrait image={props.image} onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Modal'
        style={customStyles}
      >
        <PortraitExtend image={props.image} />
        <h3>{props.name}</h3>
        <h5>{props.title}</h5>
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
