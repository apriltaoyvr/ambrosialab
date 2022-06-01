import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Modal from '../../../utility/Modal';

import {
  ResearchCard,
  ResearchIcon,
  StyledButton,
  StyledParagraph,
} from './index.styled';

import {
  fadeContainer,
  fadeSubContainer,
  fadeItem,
} from '../../../utility/framer';

const ResearchItem = (props) => {
  const { t } = useTranslation('common');

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
  };

  const open = () => {
    setModalOpen(true);
  };

  return (
    <ResearchCard variants={fadeItem}>
      <hgroup>
        <ResearchIcon>{props.icon}</ResearchIcon>
        <h3>{props.title}</h3>
      </hgroup>
      <StyledButton onClick={() => (modalOpen ? close() : open())}>
        <p>{t('utility.learn')}</p>
      </StyledButton>
      <Modal
        modalOpen={modalOpen}
        handleClose={close}
        contentLabel='Modal'
        key={`Research Modal ${props.title}`}
      >
        <ResearchIcon>{props.icon}</ResearchIcon>
        <h2>{props.title}</h2>
        <StyledParagraph>{props.info}</StyledParagraph>
      </Modal>
    </ResearchCard>
  );
};

export default ResearchItem;
