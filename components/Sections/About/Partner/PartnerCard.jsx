import {StyledPartner, ContentWrapper, NumberWrapper, SubtitleWrapper} from './Partner.styled';

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
