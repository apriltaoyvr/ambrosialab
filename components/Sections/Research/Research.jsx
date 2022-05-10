import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import ResearchItem from './ResearchItem';
import FadeIn from '../FadeIn';

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  justify-content: center;
  align-self: center;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-auto-columns: 500px;
  }
`;

const Research = () => {
  const { t } = useTranslation('common');

  return (
    <section id='research'>
      <FadeIn>
        <h1>{t('section.research')}</h1>
      </FadeIn>
      <FadeIn delay='1000'>
        <ItemWrapper>
          {t('activities', { returnObjects: true }).map((activity) => (
            <ResearchItem
              title={activity.title}
              description={activity.description}
              info={activity.info}
              icon={activity.icon}
              key={activity.id}
            />
          ))}
        </ItemWrapper>
      </FadeIn>
    </section>
  );
};

export default Research;
