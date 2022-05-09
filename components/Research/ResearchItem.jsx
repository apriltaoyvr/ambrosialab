import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

const ResearchCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  justify-content: space-around;

  border: 1px solid rgba(244, 205, 221, 0.5);

  & p {
    align-self: center;
    text-align: center;

    @media screen and (min-width: 1200px) {
      max-width: unset;
    }
  }

  &:last-child {
    grid-row-start: 3;
    grid-column: 2 / 3;
  }

`;
const ResearchIcon = styled.h2`
  font-size: 5rem;
  text-shadow: 2px 4px 12px hsl(2deg 46% 40%);
`;

const Description = styled.p`
  font-size: 1.75rem;
`;

const StyledButton = styled.button`
  background: rgba(144, 108, 147, 0.1);
  color: var(--fg);
  border: 1px solid rgba(244, 205, 221, 0.5);
  padding: 0.5rem;
  width: 75%;
  align-self: center;

  &:hover {
    cursor: pointer;
  }
`;

const ResearchItem = (props) => {
  const { t } = useTranslation('common');

  return (
    <ResearchCard>
      <hgroup>
        <ResearchIcon>{props.icon}</ResearchIcon>
        <h4>{props.title}</h4>
      </hgroup>
      <Description>{props.description}</Description>
      <StyledButton>
        <p>{t('utility.learn')}</p>
      </StyledButton>
    </ResearchCard>
  );
};

export default ResearchItem;
