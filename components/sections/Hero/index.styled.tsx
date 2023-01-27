import styled from 'styled-components';
import { motion } from 'framer-motion';
import { transparentize } from 'polished';
export const StyledHero = styled(motion.header)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;

  background: transparent;
  background: linear-gradient(
    180deg,
    ${(props) => transparentize(0.75, props.theme.background)} 0%,
    ${(props) => props.theme.background} 100%
  );

  & h1,
  & h2,
  & h3,
  & h4 {
    text-shadow: ${(props) => props.theme.shadow.header} +
      ${(props) => props.theme.background};
  }

  & p {
    text-shadow: ${(props) => props.theme.shadow.paragraph} +
      ${(props) => props.theme.background};
  }
`;

export const VideoWrapper = styled(motion.video)`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  object-fit: cover;
`;

export const TextWrapper = styled(motion.hgroup)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 12rem;

  @media screen and (min-width: 1200px) {
    justify-content: center;
    justify-items: start;
    width: 100%;
  }
`;

export const TitleHero = styled(motion.h1)`
  font-size: clamp(3rem, 1.7727rem + 5.4545vw, 12rem);
  font-weight: bold;
  text-shadow: 0px 4px 6px
    ${(props) => transparentize(0.5, props.theme.background)};
`;

export const SubtitleHero = styled(motion.h2)`
  font-size: clamp(2rem, 1.4545rem + 2.4242vw, 6rem);
  font-weight: normal;
  text-shadow: 0px 4px 6px
    ${(props) => transparentize(0.5, props.theme.background)};
`;
