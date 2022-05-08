import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { CircleFlag } from 'react-circle-flags';

import Partner from './Partner';

const StyledAbout = styled.section`
  border-top: 1px dashed var(--fg);
  gap: 2rem;

  & h1,
  & h2,
  & h3,
  & h4 {
    text-shadow: 0px 3px 6px hsl(2deg 46% 40%);
  }

  & p {
    text-shadow: 0px 1px 3px hsl(2deg 46% 40%);
  }
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  gap: 5rem;
  
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ParagraphWrapper = styled.article`
  align-self: center;
  max-width: 75%;

  & p {
    text-align: justify;
    padding-bottom: 2rem;
  }

  @media screen and (min-width: 1200px) {
    max-width: 66%;
  }

  @media screen and (min-width: 1200px) {
    max-width: 33%;
  }
`;

const PartnerWrapper = styled.aside`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 2rem;

  @media screen and (min-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const FlagWrapper = styled.figure`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

const About = () => {
  const { t } = useTranslation('common');

  return (
    <StyledAbout>
      <hgroup>
        <h1>{t('section.about')}</h1>
        <h2>{t('about.subtitle')}</h2>
      </hgroup>
      <MainWrapper>
        <ParagraphWrapper>
          <p>{t('about.paragraph.first')}</p>
          <p>{t('about.paragraph.second')}</p>
          <p>{t('about.paragraph.third')}</p>
        </ParagraphWrapper>
        <PartnerWrapper>
          <Partner
            title={t('partners.second.title')}
            number='50'
            description={t('partners.second.subtitle')}
          >
            <FlagWrapper>
              <CircleFlag countryCode='it' height='30' />
              <CircleFlag countryCode='kr' height='30' />
              <CircleFlag countryCode='sn' height='30' />
            </FlagWrapper>
          </Partner>
          <Partner
            title={t('partners.first.title')}
            number='60'
            description={t('partners.first.subtitle')}
          >
            <FlagWrapper>
              <CircleFlag countryCode='it' height='30' />
              <CircleFlag countryCode='us' height='30' />
              <CircleFlag countryCode='ru' height='30' />
              <CircleFlag countryCode='de' height='30' />
              <CircleFlag countryCode='at' height='30' />
            </FlagWrapper>
          </Partner>
          <Partner
            title={t('partners.third.title')}
            number='80'
            description={t('partners.third.subtitle')}
          >
            <FlagWrapper>
              <CircleFlag countryCode='it' height='30' />
              <CircleFlag countryCode='de' height='30' />

              <CircleFlag countryCode='ch' height='30' />
            </FlagWrapper>
          </Partner>
        </PartnerWrapper>
      </MainWrapper>
    </StyledAbout>
  );
};

export default About;
