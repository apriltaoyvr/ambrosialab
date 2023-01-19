import styled from 'styled-components';
import { motion } from 'framer-motion';
import { transparentize } from 'polished';

export const Profile = styled(motion.aside)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  justify-items: center;

  @media screen and (min-width: 1200px) {
    max-width: 80%;
  }
`;

export const Portrait = styled(motion.figure)`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  align-self: center;
  height: 200px;
  width: 200px;
  filter: opacity(0.9);
  transition: filter 0.1s cubic-bezier(0.4, 0, 1, 1);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

  &:hover {
    cursor: pointer;
    filter: opacity(1);
  }

  & img {
    border-radius: 4px;
    object-fit: cover;
  }
`;

export const PortraitExtend = styled(Portrait)`
  margin: 1rem;
  filter: none;

  &:hover {
    cursor: default;
  }
`;

export const Description = styled(motion.p)`
  padding: 1rem;
  text-align: justify;
`;
