import React from "react";
// Handle console logs
// import "util/dropConsole"; //TODO check the dropConsole util if don't need it remove it/if it doesn't not spark a joy, slash it
// Fonts
import "fontsource-roboto";
//Router
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/RouteConfig";
// MUI Theme and styles
import { ThemeProvider } from '@mui/material';
import { ThemeSwitch } from 'components/ThemeSwitch';
import { dark, light } from 'styles/muiTheme';
import './App.css';
import { ProvideAuth } from 'navigation/Auth/ProvideAuth';
//Redux
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <Header />
      <Container>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </Container>  
    </div>
  );
}

export default App;