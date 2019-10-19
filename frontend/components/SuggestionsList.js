import React, {useState, useEffect} from "react";
import fetch from "node-fetch";
import {withStyles, mergeClasses} from "@material-ui/styles";
import Navbar from "./Navbar";
import SuggestionListing from "./SuggestionListing";
import styles from "./styles/SuggestionListStyles";

function SuggestionsList(props) {
    /* suggestions should later change to be passed in from props as we either receive suggestions
     * as a result of a chat, or load previous suggestions from dynamo db */
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        if(suggestions.length == 0) {
            fetch("http://localhost:3000/suggestions")
            .then(response => response.json())
            .then(data => setSuggestions([...data]));
        }
    });
    const deleteSuggestion = id => setSuggestions(suggestions.filter(s => s.id !== id));
    const openSuggestion = id => props.history.push(`/suggestions/${id}`);
    
    const {classes} = props;
    return(
        <div className={classes.SuggestionsList}>
            <Navbar/>
            <div className={classes.container}>
                <div className={classes.suggestions}>
                    {suggestions.map(s => 
                        <SuggestionListing summaryData={s} deleteListing={deleteSuggestion} key={s.id} openListing={openSuggestion}/>)}
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(SuggestionsList);