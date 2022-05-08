import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const StyledContact = styled.section`
  display: flex;
`;

const ContactSection = styled.footer`
  display: flex;
  justify-content: center;
  gap: 5rem;
`;

const ContactWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  gap: 1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <StyledContact id='contact'>
      <h1>{t('section.contact')}</h1>
      <ContactSection>
        <ContactWrapper>
          <ContactItem>
            <FontAwesomeIcon icon={faPhone} size='2x' />
            <p>+33 0532 249307</p>
          </ContactItem>
          <ContactItem>
            <FontAwesomeIcon icon={faEnvelope} size='2x' />
            <p>alabcustomer@ambrosialab.com</p>
          </ContactItem>
        </ContactWrapper>
        <ContactItem>
          <FontAwesomeIcon icon={faLocationDot} size='2x' />
          <TextWrapper>
            <p>Via Mortara 171</p>
            <p>Ferrara, Italy</p>
            <p>44121</p>
          </TextWrapper>
        </ContactItem>
      </ContactSection>
    </StyledContact>
  );
};

export default Contact;
