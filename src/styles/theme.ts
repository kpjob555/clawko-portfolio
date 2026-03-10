import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    orange: '#ff9f43',
    orangeLight: '#ffc048',
    orangeDark: '#e58e26',
    darkBg: '#0a0a0f',
    darkCard: '#12121a',
    darkCardHover: '#1a1a25',
    textPrimary: '#ffffff',
    textSecondary: '#a1a1b0',
    purple: '#a55eea',
    pink: '#ff6b9d',
    cyan: '#00d9ff',
    teal: '#2dd4bf',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
  },
};

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
    background: ${({ theme }) => theme.colors.darkBg};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.6;
    overflow-x: hidden;
  }

  .app {
    min-height: 100vh;
    position: relative;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.darkBg};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.orange};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.orangeLight};
  }
`;

export default theme;
