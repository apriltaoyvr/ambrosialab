import { useTranslation } from 'next-i18next';
import Partner from './Partner/Partner';
import { StoryWrapper, InnerWrapper, ParagraphWrapper } from './Story.styled';

const Story = () => {
  const { t } = useTranslation('common');

  return (
      <StoryWrapper id='story'>
        <h1>{t('section.story')}</h1>
        <InnerWrapper>
          <ParagraphWrapper>
            <p>{t('about.story.paragraph.first')}</p>
            <p>{t('about.story.paragraph.second')}</p>
            <p>{t('about.story.paragraph.third')}</p>
            <p>{t('about.story.paragraph.fourth')}</p>
            <p>{t('about.story.paragraph.fifth')}</p>
            <p>{t('about.story.paragraph.sixth')}</p>
          </ParagraphWrapper>
          <Partner />
        </InnerWrapper>
      </StoryWrapper>
  );
};

export default Story;
