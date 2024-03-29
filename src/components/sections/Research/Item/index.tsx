import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { AnimatePresence } from 'framer-motion';
import { fadeItem } from '@/components/framer';
import Modal from 'src/components/utility/Modal';

/* Styled Components */
import {
  ResearchCardWrapper,
  ResearchCard,
  ResearchIcon,
  StyledButton,
  StyledParagraph,
} from './index.styled';

/* Font Awesome */
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
    <ResearchCardWrapper>
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
      <AnimatePresence>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={close}
            key={`Research Modal ${props.title}`}
          >
            <h3>{props.title}</h3>
            <ResearchIcon>
              <FontAwesomeIcon
                icon={faIcons[props.icon]}
                size='4x'
                fixedWidth
              />
            </ResearchIcon>
            <StyledParagraph>{props.info}</StyledParagraph>
          </Modal>
        )}
      </AnimatePresence>
    </ResearchCardWrapper>
  );
};

export default ResearchItem;
