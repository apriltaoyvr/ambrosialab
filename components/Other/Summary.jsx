import Team from '../Team/Team';
import Awards from './Awards';
import styled from 'styled-components';

const SummaryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`

const Summary = () => {
  return (
    <SummaryWrapper>
      <Team />
      <Awards />
    </SummaryWrapper>
  )
}
export default Summary;