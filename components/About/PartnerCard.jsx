import styled from 'styled-components';

const StyledPartner = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  padding-bottom: 1rem;
`;

const NumberWrapper = styled.h4`
  font-size: 3rem;
  text-shadow: 0px 1px 2px hsl(2deg 46% 40%);
  line-height: 0.75;
  @media screen and (min-width: 1200px) {
    font-size: 4rem;
  }
  @media screen and (min-width: 1600px) {
    font-size: 4.5rem;
  }
`;


const Partner = (props) => {
  return (
    <StyledPartner className='partner'>
      <ContentWrapper>
        <NumberWrapper>{props.number}</NumberWrapper>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </ContentWrapper>
      {props.children}
    </StyledPartner>
  );
};

export default Partner;
