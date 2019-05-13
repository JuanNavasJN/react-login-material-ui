import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";

const styles = {
    form: {
        width: "500px"
    },
    input: {
        margin: "20px"
    }
};

export default class Signup extends Component {
    render() {
        return (
            <div className="content">
                <form style={styles.form}>
                    <Card>
                        <CardContent>
                            <FormGroup style={styles.input}>
                                <InputLabel htmlFor="first-name">
                                    First Name
                                </InputLabel>
                                <Input
                                    id="first-name"
                                    inputProps={{
                                        "aria-label": "Description"
                                    }}
                                />
                            </FormGroup>

                            <FormGroup style={styles.input}>
                                <InputLabel htmlFor="first-name">
                                    Last Name
                                </InputLabel>
                                <Input
                                    id="last-name"
                                    inputProps={{
                                        "aria-label": "Description"
                                    }}
                                />
                            </FormGroup>

                            <FormGroup style={styles.input}>
                                <InputLabel htmlFor="country">
                                    Country
                                </InputLabel>
                                <Input
                                    id="country"
                                    inputProps={{
                                        "aria-label": "Description"
                                    }}
                                />
                            </FormGroup>

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
                                <Button variant="contained" color="primary">
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
