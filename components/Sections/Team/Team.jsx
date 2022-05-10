import { useTranslation } from 'next-i18next';
import TeamMember from './TeamMember';
import { TeamWrapper } from './Team.styled';

const Team = () => {
  const { t } = useTranslation('common');

  return (
    <section id='team'>
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
    </section>
  );
};

export default Team;
