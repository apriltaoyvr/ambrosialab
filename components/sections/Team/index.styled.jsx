import styled from 'styled-components';

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-self: center;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 400px);
    &:last-child {
      grid-column-start: 2;
    }
  }
`;