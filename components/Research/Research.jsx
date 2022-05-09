import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import ResearchItem from './ResearchItem';

const StyledResearch = styled.section``;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  justify-content: center;
  align-self: center;

  @media screen and (min-width: 1200px) {
    display: grid;
    max-width: 75%;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 500px;
  }
`;

const Research = () => {
  const { t } = useTranslation('common');

  return (
    <StyledResearch id='research'>
      <h1>{t('section.research')}</h1>
      <ItemWrapper>
        {t('activities', { returnObjects: true }).map((activity) => (
          <ResearchItem
            title={activity.title}
            description={activity.description}
            info={activity.info}
            icon={activity.icon}
            key={activity.key}
          />
        ))}
      </ItemWrapper>
    </StyledResearch>
  );
};

export default Research;
