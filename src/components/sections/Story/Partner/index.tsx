import { useTranslation } from 'next-i18next';
import PartnerCard from './PartnerCard';
import { slideContainer, slideItem } from 'src/components/framer';
import { PartnerWrapper, FlagWrapper, StyledFlag } from './index.styled';

const Partner = () => {
  const { t } = useTranslation('common');

  return (
    <PartnerWrapper>
      <PartnerCard
        title={t('partners.second.title')}
        number='50'
        description={t('partners.second.subtitle')}
        variants={slideContainer}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
      >
        <FlagWrapper variants={slideItem}>
          <StyledFlag countryCode='it' height='35' />
          <StyledFlag countryCode='kr' height='35' />
          <StyledFlag countryCode='sn' height='35' />
        </FlagWrapper>
      </PartnerCard>
      <PartnerCard
        title={t('partners.first.title')}
        number='60'
        description={t('partners.first.subtitle')}
        variants={slideContainer}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
      >
        <FlagWrapper>
          <StyledFlag countryCode='it' height='35' />
          <StyledFlag countryCode='us' height='35' />
          <StyledFlag countryCode='ru' height='35' />
          <StyledFlag countryCode='de' height='35' />
          <StyledFlag countryCode='at' height='35' />
        </FlagWrapper>
      </PartnerCard>
      <PartnerCard
        title={t('partners.third.title')}
        number='80'
        description={t('partners.third.subtitle')}
        variants={slideContainer}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
      >
        <FlagWrapper>
          <StyledFlag countryCode='it' height='35' />
          <StyledFlag countryCode='de' height='35' />
          <StyledFlag countryCode='ch' height='35' />
        </FlagWrapper>
      </PartnerCard>
    </PartnerWrapper>
  );
};

export default Partner;
