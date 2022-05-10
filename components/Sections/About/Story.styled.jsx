import styled from 'styled-components';

export const StoryWrapper = styled.section`
  background: linear-gradient(180deg, #7a8a62 0%, #858467 100%);
  border-top: 2px dashed var(--fg);
  border-bottom: 2px dashed var(--fg);

  h1,
  h2,
  h3 {
    text-shadow: 0px 2px 8px hsl(76deg 16% 27%);
  }

  h4,
  h5,
  p {
    text-shadow: 0px 2px 8px hsl(76deg 16% 27%);
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const ParagraphWrapper = styled.main`
  padding: 2rem;
  max-width: 900px;
  & p {
    text-align: justify;
    padding-bottom: 2rem;
  }
  @media screen and (min-width: 1200px) {
    align-self: flex-start;
    grid-column: 3 / span 6;
  }
`;
