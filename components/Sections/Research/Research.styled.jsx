import styled from 'styled-components';

export const ResearchCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  justify-content: space-around;

  border: 1px solid rgba(244, 205, 221, 0.5);
  transition: all 0.3s ease-out;

  & p {
    align-self: center;
    text-align: center;

    @media screen and (min-width: 1200px) {
      max-width: unset;
    }
  }

  &:last-child {
    grid-column-start: 2;
  }

  &:hover {
    border: 1px solid #f9e6ee;
    box-shadow: 0px 0px 10px rgba(244, 205, 221, 0.25);
  }
`;

export const ResearchIcon = styled.h2`
  font-size: 5rem;
  text-shadow: 0px 2px 6px hsl(2deg 46% 40%);
`;

export const StyledButton = styled.button`
  background: rgba(202, 168, 162, 0.1);
  color: var(--fg);
  border: 1px solid rgba(244, 205, 220, 0.75);
  padding: 0.5rem;
  width: 75%;
  align-self: center;
  transition: all 0.1s ease-out;

  &:hover {
    cursor: pointer;
    border: 1px solid rgba(244, 205, 221, 1);
    background: rgba(208, 169, 163, 0.2);
  }
`;

export const StyledParagraph = styled.p`
  font-size: 1rem;
  @media screen and (min-width: 1200px) {
    font-size: 1rem;
  }
`;