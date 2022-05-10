import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Modal from 'react-modal';
import { ResearchCard, ResearchIcon, StyledButton, StyledParagraph } from './Research.styled';

const customStyles = {
  overlay: {
    background: '#c45d5d99',
    display: 'flex',
    alignContent: 'center',
    backdropFilter: 'blur(6px)',
    overflow: 'hidden',
    transition: 'all 1s cubic-bezier(0.4, 0, 1, 1)',
  },
  content: {
    background: `rgba(252, 153, 148, 0.66)`,
    border: '1px solid rgba(252, 153, 148, 1)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    color: 'var(--fg)',
    height: 'min(50%, 900px)',
    width: 'clamp(50%, 700px, 90%)',
    top: '0',
    left: '0',
    animation: 'fadeIn 0.3s',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 1, 1)',

    transform:
      'translate(calc( (100vw - 100%) / 2 ), calc( (100vh - 100%) / 2 )',
  },
};

const ResearchItem = (props) => {
  const { t } = useTranslation('common');

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ResearchCard>
      <hgroup>
        <ResearchIcon>{props.icon}</ResearchIcon>
        <h3>{props.title}</h3>
      </hgroup>
      <StyledButton onClick={openModal}>
        <p>{t('utility.learn')}</p>
      </StyledButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Modal'
        style={customStyles}
      >
        <ResearchIcon>{props.icon}</ResearchIcon>
        <h2>{props.title}</h2>
        <StyledParagraph>{props.info}</StyledParagraph>
      </Modal>
    </ResearchCard>
  );
};

export default ResearchItem;
