import React, {useState} from "react";
import {withStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const styles = {
    Footer: {
        width: "100%",
        height:"10%",
    },
    buttons: {
        width: "80%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between"
    }
}

function Footer(props) {
    const {classes} = props;
    return (
        <div className={classes.Footer}>
            <div className={classes.buttons}>
                <Button color="primary">Previous Suggestions</Button>
                <Fab color="primary" aria-label="add" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </div>
        </div>
    )
}

export default withStyles(styles)(Footer);