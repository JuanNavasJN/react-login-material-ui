import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { connect } from "react-redux";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 1
    },
    drawerPaper: {
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
});

class Sidebar extends Component {
    componentDidMount = () => {
        console.log(this.props.main);
    };
    componentWillReceiveProps = props => {
        //console.log(props);
    };
    render() {
        if (this.props.main.logged) {
            const { classes } = this.props;
            return (
                <div className={classes.root}>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper
                        }}
                    >
                        <div className={classes.toolbar} />
                        <List>
                            {["Inbox", "Starred", "Send email", "Drafts"].map(
                                (text, index) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? (
                                                <InboxIcon />
                                            ) : (
                                                <MailIcon />
                                            )}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                )
                            )}
                        </List>
                        <Divider />
                        <List>
                            {["All mail", "Trash", "Spam"].map(
                                (text, index) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? (
                                                <InboxIcon />
                                            ) : (
                                                <MailIcon />
                                            )}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                )
                            )}
                        </List>
                    </Drawer>
                </div>
            );
        } else {
            return null;
        }
    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        main: state.main
    };
};

export default connect(
    mapStateToProps,
    null
)(withStyles(styles)(Sidebar));
