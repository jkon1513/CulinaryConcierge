import React from "react";
import {withStyles} from "@material-ui/styles";

const styles = {
    SuggestionPage: {
        height: "100vh"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    image: {
        width: "100%",
        height: "25%",
    }
}

function SuggestionPage(props) {
    const {name, menu, imageUrl, hours} = props;

    return (
        <div>
            <div>
                <h1>{name}</h1>
                <div style={{backgroundImage: `url(${imageUrl})`}}></div>
                <div>Hours: {hours}</div>
                <div>{menu}</div>
            </div>
        </div>
    )
}
export default SuggestionPage;