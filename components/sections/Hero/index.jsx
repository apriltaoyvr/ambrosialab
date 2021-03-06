import { useTranslation } from 'next-i18next';

import { fadeContainer, fadeItem } from '../../utility/framer';
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
      <TextWrapper
        variants={fadeContainer}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
      >
        <TitleHero variants={fadeItem}>{t('section.name')}</TitleHero>
        <SubtitleHero variants={fadeItem}>{t('section.subtitle')}</SubtitleHero>
      </TextWrapper>
    </StyledHero>
  );
};

export default Hero;
