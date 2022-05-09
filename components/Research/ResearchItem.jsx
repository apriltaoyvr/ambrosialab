import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { useState } from 'react';
import Modal from 'react-modal';

const ResearchCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  justify-content: space-around;

  border: 1px solid rgba(244, 205, 221, 0.5);
  transition: all 0.3s ease-out;

  & p {
    align-self: center;
    text-align: center;

    @media screen and (min-width: 1200px) {
      max-width: unset;
    }
  }

  &:hover {
    border: 1px solid #f9e6ee;
    box-shadow: 0px 0px 10px rgba(244, 205, 221, 0.25);
  }
`;
const ResearchIcon = styled.h2`
  font-size: 5rem;
  text-shadow: 0px 2px 6px hsl(2deg 46% 40%);
`;

const StyledButton = styled.button`
  background: rgba(202, 168, 162, 0.1);
  color: var(--fg);
  border: 1px solid rgba(244, 205, 220, 0.75);
  padding: 0.5rem;
  width: 75%;
  align-self: center;
  transition: all 0.1s ease-out;

  &:hover {
    cursor: pointer;
    border: 1px solid rgba(244, 205, 221, 1);
    background: rgba(208, 169, 163, 0.2);
  }
`;

const customStyles = {
  overlay: {
    background: '#c45d5d99',
    display: 'flex',
    alignContent: 'center',
    backdropFilter: 'blur(6px)',
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
    transform:
      'translate(calc( (100vw - 100%) / 2 ), calc( (100vh - 100%) / 2 )',
    scrollbarWidth: 'none',
  },
};

const StyledParagraph = styled.p`
  font-size: 1rem;
  @media screen and (min-width: 1200px) {
    font-size: 1rem;
  }
`;

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
        <h2>{props.title}</h2>
        <StyledParagraph>{props.info}</StyledParagraph>
      </Modal>
    </ResearchCard>
  );
};

export default ResearchItem;
