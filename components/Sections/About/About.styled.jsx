import styled from 'styled-components';

export const StyledAbout = styled.section`
  gap: 2rem;

  & h1,
  & h2,
  & h3,
  & h4,
  & h5 {
    text-shadow: 0px 3px 6px hsl(2deg 46% 40%);
  }

  & p {
    text-shadow: 0px 1px 3px hsl(2deg 46% 40%);
  }
`;

export const IntroWrapper = styled.main`
  display: grid;

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ParagraphWrapper = styled.article`
  align-self: center;
  grid-column: 2 / span 2;

  & p {
    text-align: justify;
    padding-bottom: 2rem;
  }

  @media screen and (min-width: 1600px) {
    align-self: flex-start;
  }
`;