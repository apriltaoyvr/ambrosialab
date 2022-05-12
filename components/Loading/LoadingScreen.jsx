import styled from 'styled-components';	

const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    min-width: 50vw;
    min-height: 25vh;
  }
`

const LoadingScreen = () => {
  return (
    <StyledLoader>
      <svg
        version='1.1'
        id='L4'
        viewBox='0 0 50 100'
      >
        <circle fill='#fff' stroke='none' cx='6' cy='50' r='6'>
          <animate
            attributeName='opacity'
            dur='1s'
            values='0;1;0'
            repeatCount='indefinite'
            begin='0.1'
          />
        </circle>
        <circle fill='#fff' stroke='none' cx='26' cy='50' r='6'>
          <animate
            attributeName='opacity'
            dur='1s'
            values='0;1;0'
            repeatCount='indefinite'
            begin='0.2'
          />
        </circle>
        <circle fill='#fff' stroke='none' cx='46' cy='50' r='6'>
          <animate
            attributeName='opacity'
            dur='1s'
            values='0;1;0'
            repeatCount='indefinite'
            begin='0.3'
          />
        </circle>
      </svg>
    </StyledLoader>
  );
}

export default LoadingScreen; 