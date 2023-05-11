import React from "react";
import "fontsource-roboto";
// import "util/dropConsole";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/RouteConfig";
import { Container } from "@mui/material";

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