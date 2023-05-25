// TODO - 23
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import { NotFound } from "navigation/NotFound";
import { ROOT, DASHBOARD, PAGE1, AUTH_PAGE1, LOGIN } from "navigation/CONSTANTS";
import { Page1 } from "pages/Page1";
import Login from "./Auth/Login";
// import { AuthorizedPage1 } from "pages/AuthorizedPage1";
// import PrivateRoute from "./Auth/PrivateRoute";

export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {/* List all public routes here */}
        <Route exact path={ROOT} component={Home} />
        <Route exact path={DASHBOARD} component={Dashboard} />
        <Route exact path={PAGE1} component={Page1} />
        <Route exact path={LOGIN} component={Login} />

        {/* List all private/auth routes here */}
        {/* <PrivateRoute path={AUTH_PAGE1} component={AuthorizedPage1} /> */}

        {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
        {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}

        {/* List a generic 404-Not Found route here */}
        <Route path="*" component={NotFound} />
      </Routes>
    </div>
  );
};
