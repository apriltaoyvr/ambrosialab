import { animated } from 'react-spring';
import styled from 'styled-components';

export const StyledHero = styled.header`
  background: linear-gradient(
    180deg,
    hsla(343, 50%, 49%, 0.2) 0%,
    hsla(343, 50%, 49%, 0.5) 100%
  );

  height: 100vh;
  word-break: break-all;
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h1,
  & h2,
  & h3,
  & h4 {
    text-shadow: 0px 3px 6px hsl(347deg 51% 29%);
  }

  & p {
    text-shadow: 0px 1px 3px hsl(347deg 51% 29%);
  }
`;

export const VideoWrapper = styled.video`
  object-fit: cover;
  position: absolute;
  width: 100vw;
  height: 155vh;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const TextWrapper = styled.hgroup`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 12rem;

  @media screen and (min-width: 1200px) {
    width: 100%;
    justify-content: center;
    justify-items: start;
  }
`;

export const TitleHero = styled(animated.h1)`
  font-size: clamp(3rem, 1.7727rem + 5.4545vw, 12rem);
  font-weight: bold;
  text-shadow: 0px 4px 6px hsla(2deg 46% 42%);
`;

export const SubtitleHero = styled(animated.h2)`
  text-shadow: 0px 4px 6px hsl(2deg 46% 42%);
  font-size: clamp(2rem, 1.4545rem + 2.4242vw, 6rem);
  font-weight: normal;
`;
