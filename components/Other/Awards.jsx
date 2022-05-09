import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

const StyledAwards = styled.section`
  align-items: center;
  grid-column: 8 / span 3;
`;

const AwardsWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 80%;

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const AwardYear = styled.h5`
  font-size: 1.75rem;
  font-weight: normal;
`

const Awards = () => {
  const { t } = useTranslation('common');

  return (
    <StyledAwards id='awards'>
      <h1>{t('section.awards')}</h1>
      <AwardsWrapper>
        {t('awards', { returnObjects: true }).map((award) => (
          <div>
            <h4>{award.title}</h4>
            <AwardYear>{award.year}</AwardYear>
          </div>
        ))}
      </AwardsWrapper>
    </StyledAwards>
  );
};

export default Awards;
