import React,{useState, useEffect} from "react";
import {withStyles} from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import useControlledInput from "./hooks/useControlledForm";

const styles={
    UserForm: {
        width:"100%",
        display: "flex",
        flexDirection: "column",
        JustifyContent: "center",
        alignItems: "center"
    }
}

function UserForm(props) {
    const [email, setEmail, resetEmail] = useControlledInput("");
    const [passWord, setPassWord, resetPassWord] = useControlledInput("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //put signing/login here
        alert(`username: ${email}, password: ${passWord}`);
        resetEmail();
        resetPassWord();
    }
    const {UserForm} = props.classes;
    const {formName} = props;
    return(
        <form onSubmit={handleSubmit} className={UserForm}>
            <h1>{formName}</h1>
            <TextField
                id="email"
                label="email:"
                type="email"
                onChange={setEmail}
                style={{ margin: 8 }}
                placeholder="Enter your email"
                fullWidth
                margin="normal"
                variant="filled"
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
            />
            <TextField
                id="password"
                type="password"
                onChange={setPassWord}
                style={{ margin: 8 }}
                placeholder="Enter your password"
                fullWidth
                margin="normal"
                variant="filled"
            />
            <Button variant="contained" type="submit">Submit</Button>
        </form>

    )
}
export default withStyles(styles)(UserForm);