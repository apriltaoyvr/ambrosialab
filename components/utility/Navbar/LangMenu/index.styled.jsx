import styled from 'styled-components';
import { CircleFlag } from 'react-circle-flags';
import { motion } from 'framer-motion';

export const Flag = styled(CircleFlag)`
  &:hover {
    cursor: pointer;
  }
`;

export const Divider = styled(motion.hr)`
  border: none;
  border-left: 1px solid hsla(202.5, 40%, 96%, 0.75);
  box-shadow: 0px 0px 2px rgba(244, 205, 221, 0.25);

  @media screen and (min-width: 1700px) {
    border: none;
    border-top: 1px solid hsla(202.5, 40%, 96%, 0.75);
  }
`;

export const StyledMenu = styled(motion.div)`
  display: flex;

  position: absolute;
  top: 0;
  right: 0;
  flex-direction: row;
  gap: 1rem;
  transition: all 0.3s ease-out;
  padding: 1rem;

  @media screen and (min-width: 1700px) {
    position: relative;
    top: unset;
    flex-direction: column;
    padding: 0;
  }
`;
