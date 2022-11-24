import Image from 'next/image';
import {
  Background,
  StyledAbout,
  IntroWrapper,
  ParagraphWrapper,
} from './index.styled';
import { useTranslation } from 'next-i18next';
import { fadeContainer, fadeItem } from '../../utility/framer';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation('common');

  return (
    <Background id='about'>
      <StyledAbout
        variants={fadeContainer}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
      >
        <motion.h1 variants={fadeItem}>{t('section.about')}</motion.h1>
        <motion.h3 variants={fadeItem}>{t('about.subtitle')}</motion.h3>
        <IntroWrapper>
          <ParagraphWrapper>
            {t('about.paragraphs', { returnObjects: true }).map(
              (paragraph, index) => (
                <motion.p key={index} variants={fadeItem}>
                  {paragraph}
                </motion.p>
              )
            )}
          </ParagraphWrapper>
        </IntroWrapper>
        <motion.div variants={fadeItem}>
          <Image
            src='/images/honeycomb.svg'
            width={150}
            height={150}
            alt='A minimalist arrangement of 3 hexagons'
            draggable='false'
          />
        </motion.div>
      </StyledAbout>
    </Background>
  );
};

export default About;
