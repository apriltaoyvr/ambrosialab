import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  fadeContainer,
  fadeItem,
} from 'components/utility/framer';

const StyledAwards = styled(motion.section)`
  align-items: center;
`;

const AwardsWrapper = styled(motion.main)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media screen and (min-width: 1500px) {
    justify-content: center;
    grid-template-columns: repeat(3, 500px);
  }
`;

const AwardDesc = styled(motion.p)`
  font-size: 1.25rem;
  text-align: center;
`;

const Awards = () => {
  const { t } = useTranslation('common');

  return (
    <StyledAwards
      id='awards'
      variants={fadeContainer}
      initial='hidden'
      whileInView='visible'
      exit='hidden'
      viewport={{ once: true }}
    >
      <motion.h1 variants={fadeItem}>{t('section.awards')}</motion.h1>
      <AwardsWrapper>
        {t('awards', { returnObjects: true }).map((award) => (
          <motion.div key={award.title} variants={fadeItem}>
            <motion.h3>{award.title}</motion.h3>
            <AwardDesc>{award.description}</AwardDesc>
            <AwardDesc>{award.year}</AwardDesc>
          </motion.div>
        ))}
      </AwardsWrapper>
    </StyledAwards>
  );
};

export default Awards;
