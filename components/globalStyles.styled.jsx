import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /** Josh W Comeau Reset **/
  /*
  1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }
  /*
    3. Allow percentage-based heights in the application
  */
  html, body {
    height: 100%;
  }
  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    7. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  /*
    8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /*
    9. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }
  
  :root {
    --fg: hsl(201, 100%, 95%);
    --bg: hsl(18, 92.36%, 74.3%);
  }

  @font-face {
    font-family: 'PP Supply Sans';
    src: url('/fonts/PPSupplySans-Regular.ttf') format('ttf');
    font-weight: normal;
  }

  @font-face {
    font-family: 'PP Supply Sans';
    src: url('https://res.cloudinary.com/dsbhmynmq/raw/upload/v1652411837/AmbrosiaLab/Font/PPSupplySans-Bold_dmicbx.ttf') format('ttf');
    font-weight: bold;
  }

  @font-face {
    font-family: 'PP Supply Mono';
    src: url('https://res.cloudinary.com/dsbhmynmq/raw/upload/v1652411837/AmbrosiaLab/Font/PPSupplyMono-Regular_i1gjsm.ttf') format('ttf');
    font-weight: normal;
  }

    /* Scrollbar */
  ::-webkit-scrollbar {
    width: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
  margin: 0;
  padding: 0;
  color: var(--fg);
  background: hsl(17.7, 62%, 65.8%);
  background: linear-gradient(
    135deg,
    hsl(339, 55.75%, 44.33%) 0%,
    hsl(17.7, 62%, 65.8%) 100%
  );
  background-attachment: fixed;
  font-family: 'PP Supply Mono', 'Fira Code', Monospace;  
}

  section {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    margin-right: 
  }

  svg {
    max-height: 35px;
    max-width: 35px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2  {
    text-shadow: 0px 2px 4px hsl(2deg 46% 40%);
  ;
    text-align: center;
    user-select: none;
  }

  h3, h4, h5, h6 {
    text-shadow: 0px 1px 6px hsl(2deg 46% 40%);
  ;
    text-align: center;
  }

  figure {
    user-select: none;
  }

  p, a {
    font-size: 1rem;
    font-weight: normal;
    font-family: 'PP Supply Mono';
    text-shadow: 0px 1px 3px hsl(2deg 46% 40%);
    
    @media screen and (min-width: 1200px) {
      font-size: 1.1rem;
    }
  }

  h1 {
    font-size: 2.5rem;
    padding: 1rem;

    @media screen and (min-width: 1200px) {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: 1.75rem;
    font-weight: normal;
    padding-bottom: 1rem;

    @media screen and (min-width: 1200px) {
      font-size: 2.5rem;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: normal;
  }

  h4 {
    font-weight: normal;
    font-size: 1.25rem;
    font-family: 'PP Supply Mono';
  }
  
  h5 {
    font-weight: normal;
    font-size: 1rem;
    font-family: 'PP Supply Mono';
  }

  /* Keyframes */
  @keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

`;

export default GlobalStyle;
