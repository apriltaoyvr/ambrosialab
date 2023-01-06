import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  image: string;
}
export const TeamContent = styled(motion.aside)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  justify-items: center;

  @media screen and (min-width: 1200px) {
    max-width: 80%;
  }
`;

export const Portrait = styled(motion.figure)<Props>`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;

  min-width: 150px;
  min-height: 150px;
  filter: opacity(0.9);
  transition: filter 0.2s cubic-bezier(0.4, 0, 1, 1);

  &:hover {
    cursor: pointer;
    filter: opacity(1);
  }

  img {
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }
`;

export const PortraitExtend = styled(Portrait)<Props>`
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
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
