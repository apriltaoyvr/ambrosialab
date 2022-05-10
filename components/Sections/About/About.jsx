import { StyledAbout, IntroWrapper, ParagraphWrapper } from './About.styled';
import FadeIn from '../FadeIn';
import { useTranslation } from 'next-i18next';

const About = () => {
  const { t } = useTranslation('common');

  return (
    <StyledAbout id='about'>
      <FadeIn>
        <h1>{t('section.about')}</h1>
        <h2>{t('about.subtitle')}</h2>
      </FadeIn>
      <FadeIn delay='800'>
        <IntroWrapper>
          <ParagraphWrapper>
            <p>{t('about.paragraph.first')}</p>
            <p>{t('about.paragraph.second')}</p>
            <p>{t('about.paragraph.third')}</p>
          </ParagraphWrapper>
        </IntroWrapper>
      </FadeIn>
    </StyledAbout>
  );
};

export default About;
