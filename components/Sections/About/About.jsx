import Image from 'next/image'
import { StyledAbout, IntroWrapper, ParagraphWrapper } from './About.styled';
import FadeIn from '../../FadeIn';
import { useTranslation } from 'next-i18next';

const About = () => {
  const { t } = useTranslation('common');

  return (
    <StyledAbout id='about'>
      <FadeIn>
        <h1>{t('section.about')}</h1>
        <h3>{t('about.subtitle')}</h3>
      </FadeIn>
      <FadeIn delay='800'>
        <IntroWrapper>
          <ParagraphWrapper>
            {t('about.paragraphs', { returnObjects: true }).map(
              (paragraph, index) => (
                <p key={index}>{paragraph}</p>
              )
            )}
          </ParagraphWrapper>
        </IntroWrapper>
      </FadeIn>
      <FadeIn delay='1200'>
        <Image
          src='/images/honeycomb.svg'
          width={150}
          height={150}
          alt='A minimalist arrangement of 3 hexagons'
        />
      </FadeIn>
    </StyledAbout>
  );
};

export default About;
