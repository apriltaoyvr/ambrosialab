import { useTranslation } from 'next-i18next';
import ResearchItem from './ResearchItem';
import FadeIn from '../../FadeIn';
import { StyledResearch, ItemWrapper } from './Research.styled';

const Research = () => {
  const { t } = useTranslation('common');

  return (
    <StyledResearch id='research'>
      <FadeIn>
        <h1>{t('section.research')}</h1>
      </FadeIn>
      <FadeIn delay='1000'>
        <ItemWrapper>
          {t('activities', { returnObjects: true }).map((activity, index) => (
            <ResearchItem
              title={activity.title}
              description={activity.description}
              info={activity.info}
              icon={activity.icon}
              key={index}
            />
          ))}
        </ItemWrapper>
      </FadeIn>
    </StyledResearch>
  );
};

export default Research;
