import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { useState } from 'react';
import Modal from 'react-modal';

const TeamContent = styled.aside`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  max-width: 80%;

  &:last-child {
    grid-column-start: 2;
  }
`;

const customStyles = {
  overlay: {
    background: '#c45d5d99',
    backdropFilter: 'blur(6px)',
    display: 'flex',
    alignContent: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    background: `rgba(252, 153, 148, 0.66)`,
    border: '1px solid rgba(252, 153, 148, 1)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    color: 'var(--fg)',
    height: 'min(50%, 600px)',
    width: 'clamp(50%, 700px, 90%)',
    top: '0',
    left: '0',
    transform:
      'translate(calc( (100vw - 100%) / 2 ), calc( (100vh - 100%) / 2 )',
    overflow: 'hidden',
  },
};

const Description = styled.p`
  font-size: 1.2rem;
  padding: 1rem;
  text-align: justify;
`
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

    width: 150px;
    height: 150px;
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

  const PortraitExtend = styled(Portrait)`
    width: 250px;
    height: 250px;
    filter: none;
    margin: 1rem;

    &:hover {
      cursor: default;
    }
  `;

  return (
    <TeamContent>
      <Portrait onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Modal'
        style={customStyles}
      >
        <PortraitExtend />
        <h3>{props.name}</h3>
        <h4>{props.title}</h4>
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
