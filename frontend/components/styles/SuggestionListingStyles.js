export default {
    SuggestionListing: {
        backgroundColor: "#eee",
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
            marginBottom: ".5rem"
        },
        "&:hover": {
            "& svg": {
                opacity: "1"
            }
        }
    },
    image: {
        height: "10rem",
        width: "100%",
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