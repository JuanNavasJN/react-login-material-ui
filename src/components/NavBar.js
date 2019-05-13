import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    link: {
        color: "#fff",
        textDecoration: "none"
    },
    button: {
        padding: "10px"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    }
});
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <div className={classes.root} id="navbar">
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open
                    })}
                >
                    <Toolbar>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.grow}
                        >
                            AKOWE
                        </Typography>

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
                <Sidebar />
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
