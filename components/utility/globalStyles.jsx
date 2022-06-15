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
    src: url('https://res.cloudinary.com/dsbhmynmq/raw/upload/v1652411837/AmbrosiaLab/Font/PPSupplySans-Regular_k4garq.ttf') format('ttf');
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
    background: linear-gradient(
      135deg,
      hsl(332, 78.49462365591397%, 36.47058823529412%) 0%,
      hsl(9, 62.06896551724138%, 65.88235294117646%) 100%
    );
    background-attachment: fixed;
    font-family: 'PP Supply Mono', 'Fira Code', Monospace;  
  }

  section {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
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
    text-shadow: 0px 1px 4px hsl(2deg 46% 40%);
  ;
    text-align: center;
    user-select: none;
    margin: auto;
  }

  h3, h4, h5, h6 {
    margin: auto;
    font-family: 'PP Supply Mono', 'Fira Code', Monospace;
    font-weight: normal;
    text-align: center;
    text-shadow: 0px 1px 3px hsl(2deg 46% 40%);
  }

  p, a {
    font-size: 1rem;
    font-weight: normal;
    text-shadow: 0px 1px 2px hsl(2deg 46% 40%);
    font-family: 'PP Supply Mono', 'Fira Code', Monospace;
  }

  figure {
    user-select: none;
  }

  h1 {
    font-size: clamp(1.5rem, 1.7527rem + 1.0989vw, 4.5rem);
    padding: 0.5rem;
  }

  h2 {
    font-size: clamp(1.25rem, 1.7527rem + 1.0989vw, 2.5rem);
    font-weight: normal;
    padding-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;

  }
  
  h5 {
    font-size: 1rem;
    font-family: 'PP Supply Mono', 'Fira Code', Monospace;
  }

  h6 {
    font-size: 0.9rem;
  }

  /* Keyframes */
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
`;

export default GlobalStyle;
