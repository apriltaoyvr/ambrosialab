import { useTranslation } from 'next-i18next';
import { useSpring, config } from 'react-spring';

import {
  StyledHero, 
  VideoWrapper,
  TextWrapper,
  TitleHero,
  SubtitleHero
} from './Hero.styled.jsx';

const Hero = () => {
  const { t } = useTranslation('common');

    const titleFade = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      delay: 1000,
      config: config.molasses	
    });

    const subtitleFade = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      delay: 1300,
      config: config.molasses,
    });


  return (
    <StyledHero className='hero'>
      <VideoWrapper autoPlay muted loop>
        <source
          src='https://res.cloudinary.com/dsbhmynmq/video/upload/v1652411735/AmbrosiaLab/sour-cherry-blossom_uowq2m.mp4'
          type='video/mp4'
        ></source>
      </VideoWrapper>
      <TextWrapper>
        <TitleHero style={titleFade}>{t('section.name')}</TitleHero>
        <SubtitleHero style={subtitleFade}>
          {t('section.subtitle')}
        </SubtitleHero>
      </TextWrapper>
    </StyledHero>
  );
};

export default Hero;
