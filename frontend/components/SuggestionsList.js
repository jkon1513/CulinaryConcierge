import React, {useState} from "react";
import {withStyles, mergeClasses} from "@material-ui/styles";
import Navbar from "./Navbar";
import SuggestionListing from "./SuggestionListing";
import styles from "./styles/SuggestionListStyles";

function SuggestionsList(props) {
    /* suggestions should later change to be passed in from props as we either receive suggestions
     * as a result of a chat, or load previous suggestions from dynamo db */
    const [suggestions, setSuggestions] = useState([
        {name: "rest1", rating: 4.3, avgPrice: 20.00, id:1, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPG_HGISaiI6i_xgUeKtN2ctugjYtv0poPF5ugPYlqYqbHXc_6"}, 
        {name: "rest2", rating: 5.0, avgPrice: 16.00, id:2, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZmEu5-j06MmAa46RMq73sO5Qcs-4JyshhRb0mi34G_zbjoumH"}
    ]);
    
    const deleteSuggestion = id => setSuggestions(suggestions.filter(s => s.id !== id));
    
    const {classes} = props;
    return(
        <div className={classes.SuggestionsList}>
            <Navbar/>
            <div className={classes.container}>
                <div className={classes.suggestions}>
                    {suggestions.map(s => <SuggestionListing summaryData={s} deleteListing={deleteSuggestion}/>)}
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(SuggestionsList);