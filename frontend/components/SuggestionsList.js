import React, {useState, useEffect} from "react";
import fetch from "node-fetch";
import {withStyles} from "@material-ui/styles";
import useToggle from "./hooks/useToggle";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SuggestionListing from "./SuggestionListing";
import styles from "./styles/SuggestionListStyles";

function SuggestionsList(props) {
    /* suggestions should later change to be passed in from props as we either receive suggestions
     * as a result of a chat, or load previous suggestions from dynamo db */
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, toggleIsLoading] = useToggle(true);
    useEffect(() => {
        if(suggestions.length == 0 && isLoading) {
            fetch("http://localhost:3000/suggestions")
            .then(response => response.json())
            .then(data => setSuggestions([...data]))
            .then(toggleIsLoading());
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
            <Footer/>
        </div>
    )
}

export default withStyles(styles)(SuggestionsList);