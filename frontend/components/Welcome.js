import React,{useState} from "react";

export default function Welcome() {
    const [name, setName] = useState("Jason");

    return(
        <h1>Welcome {name}!!</h1>
    )
}