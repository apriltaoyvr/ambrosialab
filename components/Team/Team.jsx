import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import StaffCard from './StaffCard';

const StyledTeam = styled.section`
`;

const Team = () => {
  const { t } = useTranslation('common');

  return (
    <StyledTeam>
    <h1>{t('section.team')}</h1>
    <h2>This is a subtitle</h2>
      <StaffCard/>
    </StyledTeam>
  )
}

export default Team;