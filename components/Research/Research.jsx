import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import ResearchItem from './ResearchItem';

const StyledResearch = styled.section`
  background: linear-gradient(135deg, #849f69d9 0%, #73795d 100%),
    url('/images/10.jpg');
  background-size: cover;

  & h1,
  & h2,
  & h3 {
    text-shadow: 0px 3px 6px hsl(73deg 16% 23%);
  }

  & p {
    text-shadow: 0px 3px 4px hsl(73deg 16% 23%);
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  width: 75%;
  align-self: center;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
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
            icon={activity.icon}
          />
        ))}
      </ItemWrapper>
    </StyledResearch>
  );
};

export default Research;
