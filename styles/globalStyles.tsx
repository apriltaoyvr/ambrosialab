import { createGlobalStyle } from 'styled-components';
import { setLightness, transparentize } from 'polished';

const GlobalStyle = createGlobalStyle`
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.secondary} ;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      transparentize(0.2, props.theme.background)};
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.foreground};
    background: ${(props) => props.theme.background};
    background-attachment: fixed;
    font-family: 'Fira Code', Monospace;  
  }

  section {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
  }

  figure {
    user-select: none;
  }
  
  h1, h2, h3, h4, h5, h6  {
    text-shadow: ${(props) => props.theme.shadow.header} + ${(props) =>
  transparentize(0.5, props.theme.background)};
    text-align: center;
    margin: auto;
  }

  h1, h2 {
    font-weight: bold;
  }

  h3, h4 {
    font-weight: 600;
  }

  h5, h6 {
    font-weight: normal;
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
  }

  h6 {
    font-size: 0.9rem;
  }

  p, a {
    font-size: 1rem;
    font-weight: normal;
    text-shadow: ${(props) => props.theme.shadow.paragraph} + ${(props) =>
  transparentize(0.5, props.theme.background)};
    max-width: 65ch;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
