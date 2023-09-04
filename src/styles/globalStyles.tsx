import { createGlobalStyle } from 'styled-components';
import { setSaturation, transparentize } from 'polished';

const GlobalStyle = createGlobalStyle`
  /** Josh W Comeau Reset **/
  /*
  1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
  /** End of Reset **/

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: hsl(346, 67%, 63%);
  }

  ::-webkit-scrollbar-thumb {
    background-color: hsl(345, 66%, 50%);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${setSaturation(0.75, 'hsl(345, 66%, 50%)')};
  }

  :root {

  }

  html {
    scroll-behavior: smooth;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    color: ${(props) => props.theme.foreground};
    background: ${(props) => props.theme.background};
    background-attachment: fixed;
    font-family:  ${(props) => props.theme.font}, 'Fira Code', Monospace;  
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
