import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLips,
  faPotFood,
  faSuitcaseMedical,
  faVial,
  faFileCertificate,
  faMicroscope,
  faScaleBalanced,
} from '@fortawesome/pro-duotone-svg-icons';
import Modal from 'components/utility/Modal';
import { fadeItem } from 'components/utility/framer';
import {
  ResearchCard,
  ResearchIcon,
  StyledButton,
  StyledParagraph,
} from './index.styled';

const faIcons = {
  faLips,
  faPotFood,
  faSuitcaseMedical,
  faVial,
  faFileCertificate,
  faMicroscope,
  faScaleBalanced,
};

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
    <>
      <ResearchCard variants={fadeItem}>
        <hgroup>
          <ResearchIcon>
            <FontAwesomeIcon icon={faIcons[props.icon]} size='4x' fixedWidth />
          </ResearchIcon>
          <h3>{props.title}</h3>
        </hgroup>
        <StyledButton onClick={() => (modalOpen ? close() : open())}>
          <p>{t('utility.learn')}</p>
        </StyledButton>
      </ResearchCard>
      <Modal
        modalOpen={modalOpen}
        handleClose={close}
        key={`Research Modal ${props.title}`}
      >
        <h2>{props.title}</h2>
        <ResearchIcon>
          <FontAwesomeIcon icon={faIcons[props.icon]} size='4x' fixedWidth />
        </ResearchIcon>
        <StyledParagraph>{props.info}</StyledParagraph>
      </Modal>
    </>
  );
};

export default ResearchItem;