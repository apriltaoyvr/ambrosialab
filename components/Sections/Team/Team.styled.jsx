import styled from 'styled-components';

export const Description = styled.p`
  font-size: 1.2rem;
  padding: 1rem;
  text-align: justify;
  transition: 'all 0.3s cubic-bezier(0.4, 0, 1, 1)';
`;

export const TeamContent = styled.aside`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  max-width: 80%;

  &:last-child {
    grid-column-start: 2;
  }
`;

export const Portrait = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid hsla(0, 75%, 76%, 1);

  background-size: cover;
  background-image: url('/images/team/${props => props.image}');

  filter: opacity(0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);

  &:hover {
    cursor: pointer;
    filter: opacity(1);
  }
`;

export const PortraitExtend = styled(Portrait)`
  width: 250px;
  height: 250px;
  filter: none;
  margin: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);

  &:hover {
    cursor: default;
  }
`;



export const customStyles = {
  overlay: {
    background: '#c45d5d99',
    backdropFilter: 'blur(6px)',
    display: 'flex',
    alignContent: 'center',
    transition: 'all 1s cubic-bezier(0.4, 0, 1, 1)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    background: `rgba(252, 153, 148, 0.66)`,
    border: '1px solid rgba(252, 153, 148, 1)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    color: 'var(--fg)',
    height: 'min(50%, 600px)',
    width: 'clamp(50%, 700px, 90%)',
    top: '0',
    left: '0',
    animation: 'fadeIn 0.3s',

    transition: 'all 0.5s cubic-bezier(0.4, 0, 1, 1)',

    transform:
      'translate(calc( (100vw - 100%) / 2 ), calc( (100vh - 100%) / 2 )',
  },
};
