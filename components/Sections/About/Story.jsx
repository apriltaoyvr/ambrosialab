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
              <p>{t('about.story.paragraph.first')}</p>
              <p>{t('about.story.paragraph.second')}</p>
              <p>{t('about.story.paragraph.third')}</p>
              <p>{t('about.story.paragraph.fourth')}</p>
              <p>{t('about.story.paragraph.fifth')}</p>
              <p>{t('about.story.paragraph.sixth')}</p>
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
