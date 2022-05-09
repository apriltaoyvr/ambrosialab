import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

const TeamContent = styled.aside`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    &:first-child {
      grid-row-start: 1;
      grid-column: 3 / span 2;
    }

    &:nth-child(2) {
      grid-row-start: 1;
      grid-column: 5 / span 2;
    }

    &:nth-child(3) {
      grid-row-start: 2;
      grid-column: 2 / span 2;
    }
    &:nth-child(4) {
      grid-row-start: 2;
      grid-column: 4 / span 2;
    }
    &:nth-child(5) {
      grid-row-start: 2;
      grid-column: 6 / span 2;
    }
    &:nth-child(6) {
      grid-row-start: 3;
      grid-column: 3 / span 2;
    }
    &:nth-child(7) {
      grid-row-start: 3;
      grid-column: 5 / span 2;
    }
  }
`;

const TeamName = styled.h3`
  font-size: 2.5rem;
`;

const TeamTitle = styled.h4`
  font-family: 'PP Supply Mono';
  font-size: 1.75rem;
  font-weight: normal;
`;

const Team = (props) => {
  const { t } = useTranslation('common');

  const Portrait = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;

    width: 300px;
    height: 350px;
    border-radius: 2%;

    background-size: cover;
    background-image: url('/images/team/${props.image}');
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    filter: opacity(0.9);

    &:hover {
      cursor: pointer;
      filter: opacity(1);
    }
  `;

  return (
    <>
      <TeamContent>
          <Portrait />
        <hgroup>
          <TeamName>{props.name}</TeamName>
          <TeamTitle>{props.title}</TeamTitle>
        </hgroup>
      </TeamContent>
    </>
  );
};

export default Team;
