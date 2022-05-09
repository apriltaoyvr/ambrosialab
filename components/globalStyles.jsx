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
  /** NOTE: End of Reset **/

  :root {
    --fg: hsl(201, 100%, 95%);
    --bg: hsl(18, 92.36%, 74.3%);
    --pink: hsl(339, 55.75%, 44.33%);
  }

  @font-face {
    font-family: 'PP Supply Sans';
    src: url('/fonts/PPSupplySans-Regular.woff2') format('woff2'),
         url('/fonts/PPSupplySans-Regular.ttf') format('ttf'),
         url('/fonts/PPSupplySans-Regular.otf') format('otf');
    font-weight: normal;
  }

  @font-face {
    font-family: 'PP Supply Sans';
    src: url('/fonts/PPSupplySans-Bold.woff2') format('woff2'),
         url('/fonts/PPSupplySans-Bold.ttf') format('ttf'),
         url('/fonts/PPSupplySans-Bold.otf') format('otf');
    font-weight: bold;
  }

  @font-face {
    font-family: 'PP Supply Mono';
    src: url('/fonts/PPSupplyMono-Regular.woff2') format('woff2'),
         url('/fonts/PPSupplyMono-Regular.ttf') format('ttf'),
         url('/fonts/PPSupplyMono-Regular.otf') format('otf');
    font-weight: normal;
  }

    /* Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
  background: #ED4264;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
  background:  #fc9994;  
      &:hover {
        background: #FFEDBC;
        filter: brightness(1.2);
    }
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
    hsl(339, 55.75%, 44.33%) 0%,
    #de9272 100%
  );
  background-attachment: fixed;
    font-family: 'PP Supply Sans', 'Fira Code', Monospace;    
}

  section {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    text-shadow: 0px 4px 8px hsl(2deg 46% 40%);
  ;
    text-align: center;
  }

  p {
    font-size: 1.75rem;
    font-weight: normal;
    font-family: 'PP Supply Mono';
    text-shadow: 0px 1px 3px hsl(2deg 46% 40%);
    
    @media screen and (min-width: 1200px) {
      font-size: 2rem;
    }

        @media screen and (min-width: 1920px) {
      font-size: 2.15rem;
    }

  }

  h1 {
    font-size: 5rem;

    @media screen and (min-width: 450px) {
      font-size: 5.5rem;
    }

    @media screen and (min-width: 720px) {
      font-size: 6rem;
    }

    @media screen and (min-width: 1200px) {
      font-size: 6.5rem;
    }

    @media screen and (min-width: 1600px) {
      font-size: 7rem;
    }

  }

  h2 {
    font-size: 3rem;
    font-weight: normal;
    padding-bottom: 1rem;

    @media screen and (min-width: 450px) {
      font-size: 3.5rem;
    }

    @media screen and (min-width: 720px) {
      font-size: 3.75rem;
    }

    @media screen and (min-width: 1200px) {
      font-size: 4rem;
    }
    @media screen and (min-width: 1600px) {
      font-size: 4.25rem;
    }
  }
  
  h3 {
    font-weight: normal;
    font-size: 2.5rem;

    @media screen and (min-width: 720px) {
      font-size: 3rem;
    }

    @media screen and (min-width: 1200px) {
      font-size: 3.25rem;
    }

    @media screen and (min-width: 1600px) {
      font-size: 3.75rem;
    }
  }

  h4 {
    font-weight: normal;
    font-size: 2rem;

    @media screen and (min-width: 720px) {
      font-size: 2.5rem;
    }

    @media screen and (min-width: 1200px) {
      font-size: 2.75rem;
    }

    @media screen and (min-width: 1600px) {
      font-size: 3rem;
    }
  }
  
  h5 {
    font-weight: normal;
    font-size: 1.75rem;

    @media screen and (min-width: 720px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 1200px) {
      font-size: 2.25rem;
    }

    @media screen and (min-width: 1600px) {
      font-size: 2.5rem;
    }
  }


`;

export default GlobalStyle;
