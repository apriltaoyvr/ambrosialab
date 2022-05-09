import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import TeamMember from './TeamMember';

const SectionWrapper = styled.section`
`;

const TeamWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 2rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    max-width: 90%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

const Team = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <SectionWrapper id='team'>
        <h1>{t('section.team')}</h1>
        <TeamWrapper>
          {t('team', { returnObjects: true }).map((team) => (
            <TeamMember
              name={team.name}
              title={team.title}
              description={team.description}
              image={team.image}
              key={team.key}
            ></TeamMember>
          ))}
        </TeamWrapper>
      </SectionWrapper>
    </>
  );
};

export default Team;
