import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Signin from "../views/Signin";
import Signup from "../views/Signup";
import Dashboard from "../views/Dashboard";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            // light: "#757ce8",
            main: "#0E377F"
            // dark: "#002884",
            // contrastText: "#fff"
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000"
        }
    }
});

export default class Router extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <NavBar />
                    <Switch>
                        <Route path="/signin" component={Signin} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Redirect from="/" to="/signin" />
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}
