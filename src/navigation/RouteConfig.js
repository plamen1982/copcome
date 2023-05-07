import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import { ROOT } from "./CONSTANTS";

export const RouterConfig = () => {
    return (
        <Routes>
            <Route exact path={ ROOT } component={Home}>

            </Route>
        </Routes>
    );
}