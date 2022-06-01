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
  fadeContainer,
  fadeSubContainer,
  fadeItem,
} from '../../utility/framer';

const Story = () => {
  const { t } = useTranslation('common');

  return (
    <Background>
      <StoryWrapper
        id='story'
        variants={fadeContainer}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
      >
        <motion.h1 variants={fadeItem}>{t('section.story')}</motion.h1>
        <InnerWrapper>
          <ParagraphWrapper>
            {t('story.paragraphs', { returnObjects: true }).map(
              (paragraph, index) => (
                <motion.p key={index} variants={fadeItem}>
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
