import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import { ROOT } from "./CONSTANTS";

export const RouterConfig = () => {
    return (
        <Routes>
            <Route exact path={ROOT} component={Home} />
            <Route exact path={ROOT} component={Dashboard} />
            <PrivateRoute path={PAGE1}>
                <Page1 />
            </PrivateRoute>
            <PrivateRoute path={PAGE2}>
                <Page1 />
            </PrivateRoute>
            <Route path="*">
                <NotFound />
            </Route>
        </Routes>
    );
};

export default RouterConfig;