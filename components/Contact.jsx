import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

const StyledContact = styled.section`
`;

const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <StyledContact>
      <h1>{t('section.contact')}</h1>
    </StyledContact>
  );
};

export default Contact;
