import React, {useState} from "react";
import {withStyles, mergeClasses} from "@material-ui/styles";
import SuggestionListing from "./SuggestionListing";

const styles = {
    SuggestionsList: {
        height:"100vh"
    },
    container: {
        display:"flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems: "flex-start"
    },
    suggestions: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%",
    }
    
};

function SuggestionsList(props) {
    /* suggestions should later change to be passed in from props as we either receive suggestions
     * as a result of a chat, or load previous suggestions from dynamo db */
    const [suggestions, setSuggestions] = useState([
        {name: "rest1", rating: 4.3, avgPrice: 20.00, id:1}, 
        {name: "rest2", rating: 5.0, avgPrice: 16.00, id:2}
    ]);
    const {classes} = props;
    return(
        <div className={classes.SuggestionsList}>
            <div className={classes.container}>
                <div className={classes.suggestions}>
                    {suggestions.map(s => <SuggestionListing summaryData={s} />)}
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(SuggestionsList);