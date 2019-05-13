import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Index from "../views/Index";
import NavBar from "../components/NavBar";
import Signin from "../views/Signin";
import Signup from "../views/Signup";

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <Route path="/" component={Index} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
            </BrowserRouter>
        );
    }
}
