import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './contextApi/themeContext';


const ThemedApp: React.FC = () => {
  const { isDarkMode } = useTheme();

  const theme = {
    colors: {
      lWhiteBackground: isDarkMode ? '#202C36' : '#fafafa',
      whiteBackground: isDarkMode ? '#2B3844' : '#FFFFFF',
      text: isDarkMode ? '#FFFFFF' : '#111517',
    },
  };

  return (
    <StyledThemeProvider theme={theme}>
      <App />
    </StyledThemeProvider>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider>
    <ThemedApp />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
