import React from "react";
import {withStyles} from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/SuggestionListingStyles";

function SuggestionListing(props) {
    const {classes, deleteListing, openListing} = props;
    const {name, rating, avgPrice, imgUrl, id} = props.summaryData;
    
    const handleClick = (evt) => openListing(id);
    
    const handleDelete = (evt) => {
        evt.stopPropagation();
        deleteListing(id);
    }
    return (
        <div className={classes.SuggestionListing} onClick={handleClick}>
            <div className={classes.container}>
                <DeleteIcon className={classes.delete} onClick={handleDelete}/>
                <h2>{name}</h2>
                <div className={classes.image} style={{background: `url(${imgUrl}) center center/cover`}}></div>
                <div className={classes.info}>
                    <span>Avg cost: ${avgPrice}</span>
                    <span>Rating: {rating.toFixed(1)}</span>
                </div>
            </div>
        </div>
    )
}
export default withStyles(styles)(SuggestionListing);