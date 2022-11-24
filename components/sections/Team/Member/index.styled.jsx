import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TeamContent = styled(motion.aside)`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (min-width: 1200px) {
    max-width: 80%;
  }
`;

export const Portrait = styled(motion.figure)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  min-width: 150px;
  min-height: 150px;
  filter: opacity(0.8);

  &:hover {
    cursor: pointer;
    filter: opacity(1);
  }

  img {
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    border-radius: 50%;
    border: 2px solid #ce6469e6;
    transition: filter 0.3s cubic-bezier(0.4, 0, 1, 1);
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

export const Description = styled(motion.p)`
  padding: 1rem;
  text-align: justify;
`;
