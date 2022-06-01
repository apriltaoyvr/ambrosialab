import styled from 'styled-components';

export const StoryWrapper = styled.section`
  background: linear-gradient(180deg, #7a8a62 0%, #858467 100%);
  border-top: 1px solid hsla(201, 100%, 95%, 0.75);
  border-bottom: 1px solid hsla(201, 100%, 95%, 0.75);

  h1,
  h2,
  h3 {
    text-shadow: 0px 2px 2px hsl(76deg 16% 27%);
  }

  h4,
  h5,
  p {
    text-shadow: 0px 1px 4px hsl(76deg 16% 27%);
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const ParagraphWrapper = styled.main`
  padding: 2rem;
  max-width: 800px;
  & p {
    text-align: justify;
    padding-bottom: 2rem;
  }
  @media screen and (min-width: 1200px) {
    align-self: flex-start;
  }
`;
