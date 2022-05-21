import styled from 'styled-components';

export const StyledAbout = styled.section`
  gap: 2rem;
  justify-content: center;
  align-items: center;
      background: linear-gradient(
      0deg,
      hsla(332, 78%, 36%, 1) 0%,
      hsla(332, 78%, 36%, 0.9) 80%,
      hsla(332, 78%, 36%, 0.5) 100%
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
