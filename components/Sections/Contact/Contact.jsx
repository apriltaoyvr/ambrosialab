import { useTranslation } from 'next-i18next';
import {
  ContactSection,
  ContactWrapper,
  ContactItem,
} from './Contact.styled.jsx';
import FadeIn from '../../FadeIn';
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
              <FontAwesomeIcon icon={faPhone} size='lg' />
              <a href='tel: +39 0532 249307'>+39 0532 249307</a>
            </ContactItem>
            <ContactItem>
              <FontAwesomeIcon icon={faEnvelope} size='lg' />
              <a href='mail: alabcustomer@ambrosialab.com'>
                alabcustomer@ambrosialab.com
              </a>
            </ContactItem>
            <ContactItem>
              <FontAwesomeIcon icon={faLocationDot} size='lg' />
              <a
                href='https://www.google.com/maps?ll=44.837504,11.631109&z=15&t=m&hl=en&gl=IT&mapclient=embed&cid=10336596239117770497'
                target='_blank' rel='noreferrer'
              >
                Via Mortara 171 Ferrara, Italy 44121
              </a>
            </ContactItem>
          </ContactWrapper>
        </ContactSection>
      </FadeIn>
    </section>
  );
};

export default Contact;
