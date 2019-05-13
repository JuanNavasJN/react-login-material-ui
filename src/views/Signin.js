import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

const styles = {
    form: {
        width: "500px"
    },
    input: {
        margin: "20px"
    }
};

class Signin extends Component {
    componentDidMount = () => {
        //console.log(this.props.main);
        //;
    };
    componentWillReceiveProps = props => {
        //console.log(props.main);
    };
    handleClick = () => {
        this.props.login();
    };
    render() {
        return (
            <div className="content">
                <form style={styles.form}>
                    <Card>
                        <CardContent>
                            <FormGroup style={styles.input}>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input
                                    id="email"
                                    inputProps={{
                                        "aria-label": "Description"
                                    }}
                                />
                            </FormGroup>

                            <FormGroup style={styles.input}>
                                <InputLabel htmlFor="password">
                                    Password
                                </InputLabel>
                                <Input
                                    id="password"
                                    inputProps={{
                                        "aria-label": "Description"
                                    }}
                                    type="password"
                                />
                            </FormGroup>

                            <FormGroup style={styles.input}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClick}
                                >
                                    Send
                                </Button>
                            </FormGroup>
                        </CardContent>
                    </Card>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        main: state.main
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: _ => {
            dispatch({ type: "Login" });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signin);
