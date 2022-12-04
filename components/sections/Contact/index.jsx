import { useTranslation } from 'next-i18next';
import {
  ContactSection,
  ContactWrapper,
  ContactItem,
} from './index.styled.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/pro-duotone-svg-icons';

const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <section id='contact'>
      <h1>{t('section.contact')}</h1>
      <ContactSection>
        <ContactWrapper>
          <ContactItem>
            <FontAwesomeIcon icon={faPhone} fixedWidth />
            <a href='tel: +39 0532 249307'>+39 0532 249307</a>
          </ContactItem>
          <ContactItem>
            <FontAwesomeIcon icon={faEnvelope} fixedWidth />
            <a href='mail: alabcustomer@ambrosialab.com'>
              alabcustomer@ambrosialab.com
            </a>
          </ContactItem>
          <ContactItem>
            <FontAwesomeIcon icon={faLocationDot} fixedWidth />
            <a
              href='https://www.google.com/maps?ll=44.837504,11.631109&z=15&t=m&hl=en&gl=IT&mapclient=embed&cid=10336596239117770497'
              target='_blank'
              rel='noreferrer'
            >
              Via Mortara 171 Ferrara, Italy 44121
            </a>
          </ContactItem>
        </ContactWrapper>
      </ContactSection>
    </section>
  );
};

export default Contact;
