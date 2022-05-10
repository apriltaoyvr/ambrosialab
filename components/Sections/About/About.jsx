import { useTranslation } from 'next-i18next';
import { StyledAbout, IntroWrapper, ParagraphWrapper} from './About.styled';

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
