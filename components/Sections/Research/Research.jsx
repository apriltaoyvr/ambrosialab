import { useTranslation } from 'next-i18next';
import ResearchItem from './ResearchItem';
import FadeIn from '../../FadeIn';
import { ItemWrapper } from './Research.styled';

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
