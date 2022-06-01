import Image from 'next/image'
import { StyledAbout, IntroWrapper, ParagraphWrapper } from './index.styled';
import { useTranslation } from 'next-i18next';

const About = () => {
  const { t } = useTranslation('common');

  return (
    <StyledAbout id='about'>
        <h1>{t('section.about')}</h1>
        <h3>{t('about.subtitle')}</h3>
        <IntroWrapper>
          <ParagraphWrapper>
            {t('about.paragraphs', { returnObjects: true }).map(
              (paragraph, index) => (
                <p key={index}>{paragraph}</p>
              )
            )}
          </ParagraphWrapper>
        </IntroWrapper>
        <Image
          src='/images/honeycomb.svg'
          width={150}
          height={150}
          alt='A minimalist arrangement of 3 hexagons'
        />
    </StyledAbout>
  );
};

export default About;
