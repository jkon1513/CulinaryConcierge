import React from "react";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/styles";
import UserForm from "./UserForm";
import styles from "./styles/AuthenticationStyles";

function Authentication(props) {
    const {classes, hasAccount} = props;
    const loginMessage = {text: "dont have an account?", subtext: "create one!"};
    const signupMessage = {text: "already have an account?", subtext: "log back in!"};
    
    return(
        <div className={classes.Authentication}>
            <div className={classes.container}>
                <div className={classes.logoContainer}>
                    <h1 className={classes.logo}>Culinary Concierge</h1>
                    <p>Your one stop shop for dining suggestions</p>
                </div>
                <UserForm 
                    formName={hasAccount ? "Login" : "Sign Up"}
                />
                <p>{hasAccount ? loginMessage.text : signupMessage.text}</p>
                <Link to={hasAccount ? "/create-account" : "/"}>
                    {hasAccount ? loginMessage.subtext : signupMessage.subtext}
                </Link>
            </div>
        </div>
    )
}
export default withStyles(styles)(Authentication);