import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    padding: 0;
    margin: 0;

    &::-webkit-scrollbar {
      width: 5px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.white};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.blue};
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
  
  body{
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.bg};
  }
  
  #root {
    height: 100%;
  }
  
  #modal-root{
    position: relative;
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

export const mixinKeyframesSpinner = css`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const mixinFlex = ({ alignItem = 'start', justifyContent = 'flex-start' }) => css`
  display: flex;
  align-items: ${alignItem};
  justify-content: ${justifyContent};
`;

export default GlobalStyles;
