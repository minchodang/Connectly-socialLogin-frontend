import { createGlobalStyle } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import reset from 'styled-reset';

export const customMedia = generateMedia({
  desktop: '78em',
  tablet: '60em',
  mobile: '46em',
});

const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

`;

export default GlobalStyle;
