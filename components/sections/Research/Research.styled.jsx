import styled from 'styled-components';
import Image from 'next/image';

export const StyledResearch = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    hsla(343, 50%, 49%, 1),
    hsla(343, 50%, 49%, 0.5)
  );
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-bottom: 2.5rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 400px);
    grid-auto-columns: 500px;
  }
`;

export const LogoWrapper = styled.aside`
  display: grid;
  gap: 2rem;
  margin: 2rem;
  grid-template-columns: 1fr;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 500px));
  }
`;

export const Logo = styled(Image)`
  transition: filter 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }
`;

export const ResearchCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  border: 1px solid rgba(244, 205, 221, 0.5);
  border-radius: 4px;
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
  border-radius: 4px;

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
  padding: 1rem;
  @media screen and (min-width: 1200px) {
    font-size: 1rem;
  }
`;

export const customStyles = {
  overlay: {
    background: 'rgba(196, 93, 93, 0.5)',
    display: 'flex',
    alignContent: 'center',
    backdropFilter: 'blur(12px)',
    overflow: 'hidden',
  },
  content: {
    background: `rgba(219, 157, 154, 0.25)`,
    border: '1px solid #f7a9a5',
    borderRadius: '6px',
    boxShadow: '0 4px 30px rgba(196, 93, 93, 0.1)',
    color: 'var(--fg)',
    height: 'min(60%, 600px)',
    width: 'clamp(40%, 700px, 80%)',
    top: '0',
    left: '0',
    animation: 'fadeIn 0.3s',
    transform:
      'translate(calc( (100vw - 100%) / 2 ), calc( (100vh - 100%) / 2 )',
  },
};