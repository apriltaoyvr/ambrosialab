import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Modal from 'react-modal';
import { ResearchCard, ResearchIcon, StyledButton, StyledParagraph, customStyles } from './Research.styled';

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
