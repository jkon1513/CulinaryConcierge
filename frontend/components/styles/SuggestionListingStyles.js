export default {
    SuggestionListing: {
        height: "43%",
        backgroundColor: "#ecfcff",
        borderRadius: "5px",
        padding: "1rem",
        border: "1px solid #000"
    },
    container: {
        position: "relative",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        "& h2": {
            marginBottom: ".5rem",
            color: "#3e64ff"
        },
        "&:hover": {
            "& svg": {
                opacity: "1"
            }
        }
    },
    image: {
        position: "relative",
        height: "10rem",
        width: "100%",
        backgroundImage: props => `url(${props.summaryData.imgUrl})`,
        "&:after" : {
            content: "\"\"",
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            backgroundImage: "linear-gradient(#000, #000)",
            opacity: "0.4",
            zIndex: "1"
        }

    },
    info: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginTop: ".2rem"
    }, 
    delete: {
        position: "absolute",
        top: "0",
        left: "0",
        opacity: "0",
        transition: "opacity .5s ease-in",
        "&:hover": {
            cursor: "pointer"
        }
    }
}