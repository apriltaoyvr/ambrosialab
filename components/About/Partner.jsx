import styled from 'styled-components';
import { CircleFlag } from 'react-circle-flags';

const StyledPartner = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlagWrapper = styled.figure`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;


const NumberWrapper = styled.h4`
  font-size: 3.5rem;
`
const Partner = (props) => {
  return (
    <StyledPartner className='partner'>
      <h3>{props.title}</h3>
      <NumberWrapper>{props.number}</NumberWrapper>
      <h4>{props.description}</h4>
      <FlagWrapper>
        <CircleFlag countryCode='it' height='35' />
      </FlagWrapper>
    </StyledPartner>
  );
};

export default Partner;
