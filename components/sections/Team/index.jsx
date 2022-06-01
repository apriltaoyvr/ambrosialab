import { useTranslation } from 'next-i18next';
import Member from './Member';
import { TeamWrapper } from './index.styled';

const Team = () => {
  const { t } = useTranslation('common');

  return (
    <section id='team'>
      <h1>{t('section.team')}</h1>
      <TeamWrapper>
        {t('team', { returnObjects: true }).map((team, index) => (
          <Member
            name={team.name}
            title={team.title}
            description={team.description}
            image={team.image}
            key={index}
          />
        ))}
      </TeamWrapper>
    </section>
  );
};

export default Team;
