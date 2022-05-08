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

const NumberWrapper = styled.h3`
  font-size: 2rem;
  text-shadow: 0px 1px 2px hsl(2deg 46% 40%);
`;

const InfoText = styled.p`
  font-size: 1rem;
`;

const Partner = (props) => {
  return (
    <StyledPartner className='partner'>
      <ContentWrapper>
          <InfoText>{props.title}</InfoText>
          <InfoText>{props.description}</InfoText>
        <NumberWrapper>{props.number}</NumberWrapper>
      </ContentWrapper>
      {props.children}
    </StyledPartner>
  );
};

export default Partner;
