import React,{useState, useEffect} from "react";
import useControlledInput from "./hooks/useControlledForm";

function UserForm() {
    const [userName, setUserName, resetUserName] = useControlledInput("");
    const [passWord, setPassWord, resetPassWord] = useControlledInput("");

    const handleChange = (evt) => setUserName(evt);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`username: ${userName}, password: ${passWord}`);
        resetUserName();
        resetPassWord();
    }
    useEffect(() => {
        console.log("rendering");
    })
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">
                <span>username:</span>
                <input type="text" id="username" value={userName} onChange={setUserName}/>
            </label>
            <label htmlFor="password">
                <span>password:</span>
                <input type="text" id="password" value={passWord} onChange={setPassWord}/>
            </label>
            <input type="submit"/>
        </form>
    )
}
export default UserForm;