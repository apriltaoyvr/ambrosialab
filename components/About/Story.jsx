import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import Partner from './Partner';

const StoryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
  }
`;

const ParagraphWrapper = styled.main`
  padding: 1rem;
  & p {
    text-align: justify;
    padding-bottom: 2rem;
  }
  @media screen and (min-width: 1200px) {
    align-self: flex-start;
    grid-column: 3 / span 6;
  }
`;

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
