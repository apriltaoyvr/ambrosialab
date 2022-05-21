import styled from 'styled-components';

export const StyledAbout = styled.section`
  gap: 2rem;
  justify-content: center;
  align-items: center;
      background: linear-gradient(
      0deg,
      hsl(332, 78.49462365591397%, 36.47058823529412%) 50%,
      hsla(332, 78.49462365591397%, 36.47058823529412%, 0.5) 100%
    );

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
