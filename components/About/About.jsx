import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import Partner from './Partner';

const StyledAbout = styled.section`
  gap: 2rem;

  & h1,
  & h2,
  & h3,
  & h4,
  & h5 {
    text-shadow: 0px 3px 6px hsl(2deg 46% 40%);
  }

  & p {
    text-shadow: 0px 1px 3px hsl(2deg 46% 40%);
  }
`;

const IntroWrapper = styled.main`
  display: grid;

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const ParagraphWrapper = styled.article`
  align-self: center;

  & p {
    text-align: justify;
    padding-bottom: 2rem;
  }

  @media screen and (min-width: 1600px) {
    align-self: flex-start;
    grid-column: 3 / span 2;
  }
`;

const About = () => {
  const { t } = useTranslation('common');

  return (
    <StyledAbout id='about'>
      <hgroup>
        <h1>{t('section.about')}</h1>
        <h2>{t('about.subtitle')}</h2>
      </hgroup>
      <IntroWrapper>
        <ParagraphWrapper>
          <p>{t('about.paragraph.first')}</p>
          <p>{t('about.paragraph.second')}</p>
          <p>{t('about.paragraph.third')}</p>
        </ParagraphWrapper>
      </IntroWrapper>
    </StyledAbout>
  );
};

export default About;
