import { useTranslation } from 'next-i18next';

import {
  StyledHero, 
  VideoWrapper,
  TextWrapper,
  TitleHero,
  SubtitleHero
} from './index.styled.jsx';

const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <StyledHero className='hero'>
      <VideoWrapper autoPlay muted loop>
        <source
          src='https://res.cloudinary.com/dsbhmynmq/video/upload/v1652411735/AmbrosiaLab/sour-cherry-blossom_uowq2m.mp4'
          type='video/mp4'
        ></source>
      </VideoWrapper>
      <TextWrapper>
        <TitleHero >{t('section.name')}</TitleHero>
        <SubtitleHero >
          {t('section.subtitle')}
        </SubtitleHero>
      </TextWrapper>
    </StyledHero>
  );
};

export default Hero;
