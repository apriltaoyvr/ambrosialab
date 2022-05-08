import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import TeamMember from './TeamMember';

const StyledTeam = styled.section`
`;

const Team = () => {
  const { t } = useTranslation('common');

  return (
    <StyledTeam id='team'>
      {t('team', { returnObjects: true }).map((team) => (
        <TeamMember
          name={team.name}
          title={team.title}
          description={team.description}
          image={team.image}
          key={team.key}
        />
      ))}
    </StyledTeam>
  );
}

export default Team;