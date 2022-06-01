import styled from 'styled-components';
import { CircleFlag } from 'react-circle-flags';

export const Flag = styled(CircleFlag)`
  &:hover {
    cursor: pointer;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-left: 1px solid hsla(202.5, 40%, 96%, 0.75);
  box-shadow: 0px 0px 2px rgba(244, 205, 221, 0.25);

  @media screen and (min-width: 1700px) {
    border: none;
    border-top: 1px solid hsla(202.5, 40%, 96%, 0.75);
  }
`;

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 1rem;
  transition: all 0.3s ease-out;

  position: absolute;
  top: 0;
  right: 0;

  @media screen and (min-width: 1700px) {
    position: relative;
    top: unset;
    padding: 0;
    flex-direction: column;
  }
`;
