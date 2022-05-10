import { useTranslation } from 'next-i18next';
import {
  ContactSection,
  ContactWrapper,
  ContactItem,
} from './Contact.styled.jsx';
import FadeIn from '../FadeIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <section id='contact'>
      <FadeIn>
        <h1>{t('section.contact')}</h1>
      </FadeIn>
      <FadeIn>
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
            <p>Via Mortara 171 Ferrara, Italy 44121</p>
          </ContactItem>
        </ContactSection>
      </FadeIn>
    </section>
  );
};

export default Contact;
