import { createGlobalStyle } from 'styled-components';
import { DEVICE_BREAKPOINTS } from './deviceBreakpoints';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Poppins', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.CAKE_100};
    border-radius: 8px;
  }

  :root {
    // o REM de todos os elementos da aplicação se baseiam no valor font-size definido em pixels do :root
    font-size: 16px;

    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
      font-size: 14px; 
    }

    @media (max-width:${DEVICE_BREAKPOINTS.SM}) {
      font-size: 12px; 
    }
  }
`;