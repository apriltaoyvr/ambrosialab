import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

const StyledAwards = styled.section`
  background: linear-gradient(135deg, #849f69 0%, #73795d 100%);
  padding: 0;
  & h1,
  & h2,
  & h3 {
    text-shadow: 0px 3px 6px hsl(73deg 16% 23%);
  }

  & p {
    text-shadow: 0px 1px 3px hsl(73deg 16% 23%);
  }
`;

const Awards = () => {
  const { t } = useTranslation('common');

  return (
    <StyledAwards id='awards'>
      <h1>{t('section.awards')}</h1>
      <h2>This is a subtitle</h2>
    </StyledAwards>
  );
};

export default Awards;
