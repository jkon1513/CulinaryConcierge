import React from "react";
import {withStyles} from "@material-ui/styles";

const styles = {
    SuggestionListing: {
        backgroundColor: "#eee",
        borderRadius: "5px",
        padding: "1rem 0"
    },
    container: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    image: {
        height: "10rem",
        width: "100%",
        backgroundColor: "#bbb",
    },
    info: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
    }
}

function SuggestionListing(props) {
    const {classes} = props;
    const {name, rating, avgPrice} = props.summaryData;
    return (
        <div className={classes.SuggestionListing}>
            <div className={classes.container}>
                <h2>{name}</h2>
                <div className={classes.image}>image will go here</div>
                <div className={classes.info}>
                    <span>Average cost: {avgPrice}</span>
                    <span>Rating: {rating}</span>
                </div>
            </div>
        </div>
    )
}
export default withStyles(styles)(SuggestionListing);