import styled from 'styled-components';

export const Description = styled.p`
  padding: 1rem;
`;

export const TeamContent = styled.aside`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  gap: 1rem;

  &:last-child {
    grid-column-start: 2;
  }

  @media screen and (min-width: 1200px) {
    max-width: 80%;
  }
`;

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

export const Portrait = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  min-width: 150px;
  min-height: 150px;
  aspect-ratio: 1;

  border-radius: 50%;
  border: 1.5px solid rgb(252, 153, 148);

  background-size: cover;
  background-image: url('/images/team/${(props) => props.image}');

  filter: opacity(0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);

  &:hover {
    cursor: pointer;
    filter: opacity(1);
  }
`;

export const PortraitExtend = styled(Portrait)`
  filter: none;
  margin: 1rem;

  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);

  &:hover {
    cursor: default;
  }
`;

export const customStyles = {
  overlay: {
    background: 'rgba(196, 93, 93, 0.5)',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    alignContent: 'center',
    transition: 'all 1s cubic-bezier(0.4, 0, 1, 1)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    background: `rgba(219, 157, 154, 0.25)`,
    border: '1px solid #f7a9a5',
    borderRadius: '6px',
    boxShadow: '0 4px 30px rgba(196, 93, 93, 0.1)',
    color: 'var(--fg)',
    height: 'min(75%, 500px)',
    width: 'clamp(30%, 400px, 90%)',
    top: '0',
    left: '0',
    animation: 'fadeIn 0.3s',

    transition: 'all 0.5s cubic-bezier(0.4, 0, 1, 1)',

    transform:
      'translate(calc( (100vw - 100%) / 2 ), calc( (100vh - 100%) / 2 )',
  },
};
