import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import { SectionWrapper, AwardsWrapper, Award } from './index.styled';

const Awards = () => {
  const { t } = useTranslation('common');

  return (
    <SectionWrapper id='awards'>
      <motion.h1>{t('section.awards')}</motion.h1>
      <AwardsWrapper>
        {t('awards', { returnObjects: true }).map((award) => (
          <Award key={award.title}>
            <motion.h3>{award.title}</motion.h3>
            <motion.span>{award.description}</motion.span>
            <motion.span>{award.year}</motion.span>
          </Award>
        ))}
      </AwardsWrapper>
    </SectionWrapper>
  );
};

export default Awards;
