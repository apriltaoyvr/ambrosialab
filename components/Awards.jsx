import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

const StyledAwards = styled.section`
  background: linear-gradient(
    135deg,
    #9358f7 0.87%,
    #7b78f2 25.96%,
    #6197ee 49.23%,
    #45b5e9 74.93%,
    #10d7e2 97.48%
  );
  padding: 0;
  & h1,
  & h2,
  & h3 {
    text-shadow: 0px 3px 6px hsl(213deg 50% 32%);
  }

  & p {
    text-shadow: 0px 1px 3px hsl(213deg 50% 32%);
  }
`;

const Awards = () => {
  const { t } = useTranslation('common');

  return (
    <StyledAwards>
      <h1>{t('section.awards')}</h1>
      <h2>This is a subtitle</h2>
    </StyledAwards>
  );
};

export default Awards;
