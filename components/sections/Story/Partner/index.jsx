import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { CircleFlag } from 'react-circle-flags';
import { motion } from 'framer-motion';

import PartnerCard from './PartnerCard';

import {
  fadeContainer,
  fadeSubContainer,
  fadeItem,
} from '../../../utility/framer';

const PartnerWrapper = styled(motion.aside)`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  gap: 5rem;
  align-self: center;
  grid-column: 9 / span 2;

  @media screen and (min-width: 1200px) {
    align-self: flex-start;
  }
`;

const FlagWrapper = styled.figure`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

const Partner = () => {
  const { t } = useTranslation('common');

  return (
    <PartnerWrapper
      variants={fadeSubContainer}
      initial='hidden'
      whileInView='visible'
      exit='hidden'
    >
      <PartnerCard
        title={t('partners.second.title')}
        number='50'
        description={t('partners.second.subtitle')}
        variants={fadeItem}
      >
        <FlagWrapper>
          <CircleFlag countryCode='it' height='35' variants={fadeItem} />
          <CircleFlag countryCode='kr' height='35' variants={fadeItem} />
          <CircleFlag countryCode='sn' height='35' variants={fadeItem} />
        </FlagWrapper>
      </PartnerCard>
      <PartnerCard
        title={t('partners.first.title')}
        number='60'
        description={t('partners.first.subtitle')}
        variants={fadeItem}
      >
        <FlagWrapper>
          <CircleFlag countryCode='it' height='35' variants={fadeItem} />
          <CircleFlag countryCode='us' height='35' variants={fadeItem} />
          <CircleFlag countryCode='ru' height='35' variants={fadeItem} />
          <CircleFlag countryCode='de' height='35' variants={fadeItem} />
          <CircleFlag countryCode='at' height='35' variants={fadeItem} />
        </FlagWrapper>
      </PartnerCard>
      <PartnerCard
        title={t('partners.third.title')}
        number='80'
        description={t('partners.third.subtitle')}
        variants={fadeItem}
      >
        <FlagWrapper>
          <CircleFlag countryCode='it' height='35' variants={fadeItem} />
          <CircleFlag countryCode='de' height='35' variants={fadeItem} />
          <CircleFlag countryCode='ch' height='35' variants={fadeItem} />
        </FlagWrapper>
      </PartnerCard>
    </PartnerWrapper>
  );
};

export default Partner;
