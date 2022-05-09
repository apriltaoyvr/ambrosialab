import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { CircleFlag } from 'react-circle-flags';
import PartnerCard from './PartnerCard';

const PartnerWrapper = styled.aside`
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
  gap: 5rem;
  align-self: center;
  grid-column: 9 / span 2;

  @media screen and (min-width: 1200px) {
    flex-direction: column;
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
    <PartnerWrapper>
      <PartnerCard
        title={t('partners.second.title')}
        number='50'
        description={t('partners.second.subtitle')}
      >
        <FlagWrapper>
          <CircleFlag countryCode='it' height='50' />
          <CircleFlag countryCode='kr' height='50' />
          <CircleFlag countryCode='sn' height='50' />
        </FlagWrapper>
      </PartnerCard>
      <PartnerCard
        title={t('partners.first.title')}
        number='60'
        description={t('partners.first.subtitle')}
      >
        <FlagWrapper>
          <CircleFlag countryCode='it' height='50' />
          <CircleFlag countryCode='us' height='50' />
          <CircleFlag countryCode='ru' height='50' />
          <CircleFlag countryCode='de' height='50' />
          <CircleFlag countryCode='at' height='50' />
        </FlagWrapper>
      </PartnerCard>
      <PartnerCard
        title={t('partners.third.title')}
        number='80'
        description={t('partners.third.subtitle')}
      >
        <FlagWrapper>
          <CircleFlag countryCode='it' height='50' />
          <CircleFlag countryCode='de' height='50' />
          <CircleFlag countryCode='ch' height='50' />
        </FlagWrapper>
      </PartnerCard>
    </PartnerWrapper>
  );
};

export default Partner;