import { useTranslation } from 'next-i18next';
import Partner from './Partner/Partner';
import { StoryWrapper, InnerWrapper, ParagraphWrapper } from './index.styled';

const Story = () => {
  const { t } = useTranslation('common');
  
  return (
      <StoryWrapper id='story'>
          <h1>{t('section.story')}</h1>
        <InnerWrapper>
            <ParagraphWrapper>
              {t('about.story.paragraphs', { returnObjects: true }).map(
                (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </ParagraphWrapper>
            <Partner />
        </InnerWrapper>
      </StoryWrapper>
  );
};

export default Story;
