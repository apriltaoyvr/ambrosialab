import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import ResearchItems from './ResearchItems';

const StyledResearch = styled.section`
  background: linear-gradient(135deg, #849f6975 0%, #73795d 100%),
  url('/images/10.jpg');
  background-size: cover;

  & h1,
  & h2,
  & h3 {
    text-shadow: 0px 3px 6px hsl(73deg 16% 23%);
  }

  & p {
    text-shadow: 0px 1px 3px hsl(73deg 16% 23%);
  }
`;

const Research = () => {
  const { t } = useTranslation('common');

  return (
    <StyledResearch>
        <h1>{t('section.research')}</h1>
        <ResearchItems />
    </StyledResearch>
  );
};

export default Research;
