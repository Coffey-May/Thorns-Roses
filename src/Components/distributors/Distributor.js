import React from "react";
import { Route } from "react-router-dom";
import ApplicationViews from "../ApplicationViews";
// import Login from "./auth/Login"
// import Register from "./auth/Register"
// import "./Thorns.css";
import NavBar from "../nav/NavBar";

export default () => (
    <>
        <Route render={props => <NavBar {...props} />} />

        <Route render={props => <ApplicationViews {...props} />} />
    </>
);