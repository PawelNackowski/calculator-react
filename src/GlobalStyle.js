import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
      font-family: 'Orbitron', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      height: 100%;
      overflow: hidden;
    }

    *, ::after, ::before {
      box-sizing: inherit;
    }
  
    body {
      background-color: ${({ theme }) => theme.colors.background};
      transition: background-color 1s;
    }

`;
