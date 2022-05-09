import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import TeamMember from './TeamMember';

const SectionWrapper = styled.section`
`;

const TeamWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  @media screen and (min-width: 1600px) {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(3, 1fr);
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
