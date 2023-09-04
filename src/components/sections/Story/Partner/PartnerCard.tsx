import {StyledPartner, NumberWrapper, SubtitleWrapper} from './index.styled';

const Partner = (props) => {
  return (
    <StyledPartner className='partner'>
      <div className='wrapper'>
        <SubtitleWrapper>{props.title}</SubtitleWrapper>
        <p>{props.description}</p>
        <NumberWrapper>{props.number}</NumberWrapper>
      </div>
      {props.children}
    </StyledPartner>
  );
};

export default Partner;
