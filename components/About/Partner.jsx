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
`;

const Partner = (props) => {
  return (
    <StyledPartner className='partner'>
      <ContentWrapper>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <NumberWrapper>{props.number}</NumberWrapper>
      </ContentWrapper>
      {props.children}
    </StyledPartner>
  );
};

export default Partner;
