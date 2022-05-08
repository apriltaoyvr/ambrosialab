import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

{/* Hexagon Code Sourced from https://jsfiddle.net/kizu/bhGn4/ */}

  const HexagonOuter = styled.div`
    overflow: hidden;
    visibility: hidden;
    transform: rotate(120deg);
    cursor: pointer;
  `;

  const HexagonInner = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    transform: rotate(-60deg);
  `;

  const Team = (props) => {
  const { t } = useTranslation('common');

  const HexagonInnerMost = styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    background-image: url('/images/team/${props.image}');
    visibility: visible;
    transform: rotate(-60deg);
  `;

  return (
    <>
      <HexagonOuter>
        <HexagonInner>
          <HexagonInnerMost background-image={props.image}></HexagonInnerMost>
        </HexagonInner>
      </HexagonOuter>

      <h3>{props.name}</h3>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </>
  );
};

export default Team;
