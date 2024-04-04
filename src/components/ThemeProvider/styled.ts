import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    padding: 0;
    margin: 0;
  }
  
  body{
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  #root {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  ul,
  ol,
  li {
    list-style: none;
  }
`;

export const mixinFlex = ({ alignItem = 'start', justifyContent = 'flex-start' }) => css`
  display: flex;
  align-items: ${alignItem};
  justify-content: ${justifyContent};
`;

export default GlobalStyles;
