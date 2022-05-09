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

const NumberWrapper = styled.h5`
  font-size: 3rem;
  text-shadow: 0px 2px 3px hsl(2deg 46% 40%);
`;

const SubtitleWrapper = styled.h4`
  text-shadow: 0px 1px 3px hsl(2deg 46% 40%);
`;


const Partner = (props) => {
  return (
    <StyledPartner className='partner'>
      <ContentWrapper>
        <SubtitleWrapper>{props.title}</SubtitleWrapper>
        <NumberWrapper>{props.number}</NumberWrapper>
        <p>{props.description}</p>
      </ContentWrapper>
      {props.children}
    </StyledPartner>
  );
};

export default Partner;
