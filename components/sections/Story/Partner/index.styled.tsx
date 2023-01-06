import styled from 'styled-components';
import { CircleFlag } from 'react-circle-flags';
import { motion } from 'framer-motion';

export const StyledPartner = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    text-align: center;
  }
`;

export const PartnerWrapper = styled(motion.aside)`
  display: flex;
  flex-direction: column;
  grid-column: 9 / span 2;
  gap: 5rem;
  align-self: center;
  padding-top: 2rem;

  @media screen and (min-width: 1200px) {
    align-self: flex-start;
  }
`;

export const FlagWrapper = styled(motion.figure)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

export const StyledFlag = styled(CircleFlag)`
  filter: drop-shadow(0px 1px 4px hsla(76deg 16% 27% 0.1));
`;

export const NumberWrapper = styled.h5`
  text-shadow: 0px 2px 3px hsl(2deg 46% 40%);
  font-size: 3.5rem;
`;

export const SubtitleWrapper = styled.h3`
  text-shadow: 0px 1px 3px hsl(2deg 46% 40%);
`;
