import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import Partner from './Partner';

import {
  Background,
  StoryWrapper,
  InnerWrapper,
  ParagraphWrapper,
} from './index.styled';

import {
  slideContainer,
  slideItem,
} from '../../utility/framer';

const Story = () => {
  const { t } = useTranslation('common');

  return (
    <Background
      id='story'
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
    >
      <StoryWrapper
        variants={slideContainer}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
      >
        <motion.h1>{t('section.story')}</motion.h1>
        <InnerWrapper>
          <ParagraphWrapper variants={slideContainer}>
            {t('story.paragraphs', { returnObjects: true }).map(
              (paragraph, index) => (
                <motion.p key={index} variants={slideItem}>
                  {paragraph}
                </motion.p>
              )
            )}
          </ParagraphWrapper>
          <Partner />
        </InnerWrapper>
      </StoryWrapper>
    </Background>
  );
};

export default Story;
