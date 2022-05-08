import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import styled from 'styled-components';

const ResearchCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  justify-content: space-evenly;

  background: rgba(131, 182, 170, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  border: 1px dashed rgba(207, 244, 205, 0.25);

  & p {
    align-self: center;
    text-align: center;

    @media screen and (min-width: 1200px) {
      max-width: unset;
    }

    & h2 {
      font-size: 1.15rem;
      @media screen and (min-width: 1600px) {
        font-size: 1.25rem;
      }
    }
  }
`;
const ResearchIcon = styled.h2`
  font-size: 5rem;
  text-shadow: 2px 2px 12px hsl(73deg 16% 23%);
`;

const ResearchItem = (props) => {
  const { t } = useTranslation('common');
  const [isHover, setIsHover] = useState(false);
  const toggleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <ResearchCard
      key={props.key}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {isHover ? (
        <p>{props.description}</p>
      ) : (
        <hgroup>
          <ResearchIcon>{props.icon}</ResearchIcon>
          <h2>{props.title}</h2>
        </hgroup>
      )}
    </ResearchCard>
  );
};

export default ResearchItem;
