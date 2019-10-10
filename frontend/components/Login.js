import React from "react";
import {withStyles} from "@material-ui/styles";
import UserForm from "./UserForm";

const styles = {
    Login:{
        height: "100vh",
    },
    container: {
        position:"relative",
        height:"100%",
        width: "50%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    logoContainer: {
        position:"absolute",
        top:"0",
        textAlign: "center"
    },
    logo: {
        fontSize: "3rem",
        margin: "3px",
        border: ".1rem solid #000",
        padding:"1rem"
    },

}

function Login(props) {
    const {classes} = props;
    return(
        <div className={classes.Login}>
            <div className={classes.container}>
                <div className={classes.logoContainer}>
                    <h1 className={classes.logo}>Culinary Concierge</h1>
                    <p>Your one stop shop for dining suggestions</p>
                </div>
                <UserForm formName="Login"/>
                <p>dont have an account?</p>
                <a href="#">Create one!</a>
            </div>
        </div>
    )
}

export default withStyles(styles)(Login);