import { animated } from 'react-spring';
import styled from 'styled-components';

export const StyledHero = styled.header`
  background: linear-gradient(
    135deg,
    hsla(339, 55.75%, 44.33%, 0.25) 0%,
    hsla(18, 92.36%, 74.3%, 0.25) 100%
  );
  height: 100vh;

  display: flex;
  flex-direction: column;

  & h1,
  & h2,
  & h3,
  & h4 {
    text-shadow: 0px 3px 6px hsl(347deg 51% 29%);
  }

  & p {
    text-shadow: 0px 1px 3px hsl(347deg 51% 29%);
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row-reverse;
    align-items: flex-start;
  }
`;

export const VideoWrapper = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const TextWrapper = styled.hgroup`
  height: 75%;
  padding: 1rem;
  display: grid;
  text-align: center;
  justify-items: center;
  align-items: center;
  align-content: center;

  @media screen and (min-width: 1200px) {
    width: 100%;
    justify-content: center;
    justify-items: start;
    text-align: left;
  }
`;

export const TitleHero = styled(animated.h1)`
  word-break: normal;
  font-size: 5rem;
  font-weight: bold;
  text-shadow: 0px 4px 6px hsla(2deg 46% 42%);

  @media screen and (min-width: 1200px) {
    font-size: 8rem;
  }
`;

export const SubtitleHero = styled(animated.h2)`
  word-break: normal;
  text-shadow: 0px 4px 6px hsl(2deg 46% 42%);
  font-size: 3rem;
  font-weight: normal;

  @media screen and (min-width: 1200px) {
    font-size: 4rem;
  }
`;
