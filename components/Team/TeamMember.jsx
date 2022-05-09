import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { useState } from 'react';
import Modal from 'react-modal';

const TeamContent = styled.aside`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
`;

const customStyles = {
  overlay: {
    background: '#c45d5d99',
    backdropFilter: 'blur(6px)',
    display: 'flex',
    alignContent: 'center',
  },
  content: {
    background: `rgba(252, 153, 148, 0.66)`,
    border: '1px solid rgba(252, 153, 148, 1)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    color: 'var(--fg)',
    height: 'min(50%, 300px)',
    width: 'clamp(50%, 700px, 90%)',
    top: '0',
    left: '0',
    transform:
      'translate(calc( (100vw - 100%) / 2 ), calc( (100vh - 100%) / 2 )',
      overflow: 'hidden'
  },
};

const Team = (props) => {
  const { t } = useTranslation('common');

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const Portrait = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;

    width: 175px;
    height: 175px;
    border-radius: 50%;
    border: 2px solid hsla(0, 75%, 76%, 1);

    background-size: cover;
    background-image: url('/images/team/${props.image}');
    filter: opacity(0.8);
    transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);

    &:hover {
      cursor: pointer;
      filter: opacity(1);
    }
  `;

  return (
    <>
      <TeamContent>
        <Portrait onClick={openModal} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel='Modal'
          style={customStyles}
        >
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </Modal>

        <hgroup>
          <h3>{props.name}</h3>
          <h4>{props.title}</h4>
        </hgroup>
      </TeamContent>
    </>
  );
};

export default Team;
