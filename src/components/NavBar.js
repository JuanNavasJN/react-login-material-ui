import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const styles = {
    root: {
        flexGrow: 1
    },
    appbar: {
        alignItems: "flex-end"
    },
    link: {
        color: "#fff",
        textDecoration: "none"
    },
    button: {
        padding: "10px"
    }
};

function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root} id="navbar">
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <Link to="signin" className={classes.link}>
                        <Button className={classes.button} color="inherit">
                            Sign In
                        </Button>
                    </Link>
                    <Link to="signup" className={classes.link}>
                        <Button className={classes.button} color="inherit">
                            Sign Up
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
