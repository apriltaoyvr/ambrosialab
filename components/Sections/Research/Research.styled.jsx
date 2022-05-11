import styled from 'styled-components';

export const ResearchCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  justify-content: space-between;

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

export const ResearchIcon = styled.figure`
  font-size: 5rem;
  text-shadow: 1px 2px 2px hsl(2deg 46% 40%);
  text-align: center;
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
  text-align: justify;
  padding: 1rem;
  @media screen and (min-width: 1200px) {
    font-size: 1rem;
  }
`;

export const customStyles = {
  overlay: {
    background: '#c45d5d99',
    display: 'flex',
    alignContent: 'center',
    backdropFilter: 'blur(6px)',
    overflow: 'hidden',
    transition: 'all 1s cubic-bezier(0.4, 0, 1, 1)',
  },
  content: {
    background: `rgba(195, 111, 106, 0.66)`,
    border: '1px solid rgba(252, 153, 148, 1)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    color: 'var(--fg)',
    height: 'min(50%, 900px)',
    width: 'clamp(50%, 700px, 90%)',
    top: '0',
    left: '0',
    animation: 'fadeIn 0.3s',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 1, 1)',

    transform:
      'translate(calc( (100vw - 100%) / 2 ), calc( (100vh - 100%) / 2 )',
  },
};