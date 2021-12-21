import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/theme/ThemeContext';
import Background from './components/background/Background';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);