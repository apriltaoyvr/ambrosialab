import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import FadeIn from './FadeIn';

const StyledAwards = styled.section`
  align-items: center;
  grid-column: 8 / span 3;
`;

const AwardsWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 1200px) {
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const AwardDesc = styled.p`
  font-size: 1.25rem;
  text-align: center;
`

const Awards = () => {
  const { t } = useTranslation('common');

  return (
    <StyledAwards id='awards'>
      <FadeIn>
        <h1>{t('section.awards')}</h1>
      </FadeIn>
      <FadeIn delay='1200'>
        <AwardsWrapper>
          {t('awards', { returnObjects: true }).map((award) => (
            <div key={award.id}>
              <h3>{award.title}</h3>
              <AwardDesc>{award.description}</AwardDesc>
              <AwardDesc>{award.year}</AwardDesc>
            </div>
          ))}
        </AwardsWrapper>
      </FadeIn>
    </StyledAwards>
  );
};

export default Awards;
