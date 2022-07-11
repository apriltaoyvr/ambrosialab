import { useTranslation } from 'next-i18next';

/* Components */
import PartnerCard from './PartnerCard';

/* Framer Motion */
import {
  fadeSubContainer,
  fadeItem,
} from '../../../utility/framer';

/* Styled Components */
import { PartnerWrapper, FlagWrapper, StyledFlag } from './index.styled';

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
          <StyledFlag countryCode='it' height='35' variants={fadeItem} />
          <StyledFlag countryCode='kr' height='35' variants={fadeItem} />
          <StyledFlag countryCode='sn' height='35' variants={fadeItem} />
        </FlagWrapper>
      </PartnerCard>
      <PartnerCard
        title={t('partners.first.title')}
        number='60'
        description={t('partners.first.subtitle')}
        variants={fadeItem}
      >
        <FlagWrapper>
          <StyledFlag countryCode='it' height='35' variants={fadeItem} />
          <StyledFlag countryCode='us' height='35' variants={fadeItem} />
          <StyledFlag countryCode='ru' height='35' variants={fadeItem} />
          <StyledFlag countryCode='de' height='35' variants={fadeItem} />
          <StyledFlag countryCode='at' height='35' variants={fadeItem} />
        </FlagWrapper>
      </PartnerCard>
      <PartnerCard
        title={t('partners.third.title')}
        number='80'
        description={t('partners.third.subtitle')}
        variants={fadeItem}
      >
        <FlagWrapper>
          <StyledFlag countryCode='it' height='35' variants={fadeItem} />
          <StyledFlag countryCode='de' height='35' variants={fadeItem} />
          <StyledFlag countryCode='ch' height='35' variants={fadeItem} />
        </FlagWrapper>
      </PartnerCard>
    </PartnerWrapper>
  );
};

export default Partner;
