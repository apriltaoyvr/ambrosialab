import { useTranslation } from 'next-i18next';
import FadeIn from '../FadeIn';
import Partner from './Partner/Partner';
import { StoryWrapper, InnerWrapper, ParagraphWrapper } from './Story.styled';

const Story = () => {
  const { t } = useTranslation('common');
  
  return (
    <FadeIn>
      <StoryWrapper id='story'>
        <FadeIn delay='800'>
          <h1>{t('section.story')}</h1>
        </FadeIn>
        <InnerWrapper>
          <FadeIn delay='1200'>
            <ParagraphWrapper>
              {t('about.story.paragraphs', { returnObjects: true }).map((paragraph) => (
                <p key={paragraph.id}>{paragraph}</p>
              ))}
            </ParagraphWrapper>
          </FadeIn>
          <FadeIn delay='800'>
            <Partner />
          </FadeIn>
        </InnerWrapper>
      </StoryWrapper>
    </FadeIn>
  );
};

export default Story;
