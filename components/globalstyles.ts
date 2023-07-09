import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, 
  body {
    background: #eeeeee;
    background-color: #eeeeee;
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    /* @media (min-width: 1500px) {
      width: 1500px;
      margin: auto;

    } */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  img {
    user-select: none;
  }
`;

export default GlobalStyle;
