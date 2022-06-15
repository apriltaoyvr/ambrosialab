/* Libraries */
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* Components */
import ResearchItem from './Item';
import {
  Background,
  StyledResearch,
  ItemWrapper,
  LogoWrapper,
  Logo,
} from './index.styled';

import { fadeContainer, fadeItem } from '../../utility/framer';

/* Static Image Import */
import bionano from '../../../public/images/subsidiary/bionano.png';
import sd4 from '../../../public/images/subsidiary/sd4.png';

const Research = () => {
  const { t } = useTranslation('common');

  return (
    <Background id='research'>
      <StyledResearch
        variants={fadeContainer}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
      >
        <motion.h1 variants={fadeItem}>{t('section.research')}</motion.h1>
        <ItemWrapper>
          {t('research.activities', { returnObjects: true }).map(
            (activity, index) => (
              <ResearchItem
                title={activity.title}
                description={activity.description}
                info={activity.info}
                icon={activity.icon}
                variants={fadeItem}
                key={index}
              />
            )
          )}
        </ItemWrapper>
        <motion.h3 variants={fadeItem}>{t('research.subtitle')}</motion.h3>
        <LogoWrapper>
          <motion.div variants={fadeItem}>
            <Link href={'https://www.bionanopolys.eu/'} passHref>
              <Logo
                src={bionano}
                sizes='25%'
                fill='responsive'
                alt='Bionano logo'
              />
            </Link>
          </motion.div>
          <motion.div variants={fadeItem}>
            <Link href={'https://www.sbd4nano.eu/'} passHref>
              <Logo src={sd4} alt='SD4 logo' />
            </Link>
          </motion.div>
        </LogoWrapper>
      </StyledResearch>
    </Background>
  );
};

export default Research;
