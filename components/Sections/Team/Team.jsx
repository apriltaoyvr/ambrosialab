import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import TeamMember from './TeamMember';

const SectionWrapper = styled.section`
`;

const TeamWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-self: center;
  gap: 2rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 400px);
    grid-auto-rows: auto;
  }

  &:last-child {
    grid-column-start: 2;
  }
`;

const Team = () => {
  const { t } = useTranslation('common');

  return (
      <SectionWrapper id='team'>
        <h1>{t('section.team')}</h1>
        <TeamWrapper>
          {t('team', { returnObjects: true }).map((team) => (
            <TeamMember
              name={team.name}
              title={team.title}
              description={team.description}
              image={team.image}
              key={team.id}
            ></TeamMember>
          ))}
        </TeamWrapper>
      </SectionWrapper>
  );
};

export default Team;
