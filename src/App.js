// import React from "react";
// import "fontsource-roboto";
// // import "util/dropConsole";
// import './App.css';
// import { BrowserRouter } from "react-router-dom";
// import { RouterConfig } from "./navigation/RouteConfig";
// import { Container } from "@mui/material";

// function App() {
//   return (
//     <div className="App">
//       <div className="bg"></div>
//       <Header />
//       <Container>
//         <BrowserRouter>
//           <RouterConfig />
//         </BrowserRouter>
//       </Container>  
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home'; //TODO - Home - update
import { Dashboard } from 'pages/Dashboard'; // TODO - Dashboard
import { NotFound } from 'navigation/NotFound'; // TODO - NotFound
import { ROOT, DASHBOARD, PAGE1, AUTH_PAGE1 } from 'navigation/CONSTANTS'; // TODO - create the constants
import { Page1 } from 'pages/Page1'; //TODO - Page1
import Login from './Auth/Login'; //TODO - Login
import { AuthorizedPage1 } from 'pages/AuthorizedPage1' //TODO - AuthorizedPage1
import PrivateRoute from './Auth/PrivateRoute'; // TODO - PrivateRoute

export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {/* List all public routes here */}
        <Route exact path={ROOT} component={Home} />
        <Route exact path={DASHBOARD} component={Home} />
        <Route exact path={PAGE1} component={Home} />
        <Route path='/login'>
          <Login /> {/* TODO Check why Login component is wrapped in plastic(Route component) */}
        </Route>
        {/* List all private routes here */}
        <PrivateRoute path={AUTH_PAGE1}>
          <AuthorizedPage1 />
        </PrivateRoute>
        {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
        {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}
        <Route path='*'>
          <NotFound />
        </Route>
      </Routes>
    </div>
  )
}