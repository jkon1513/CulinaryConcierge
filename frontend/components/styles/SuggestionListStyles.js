import background from "./images/Subtle-Prism.svg";

export default {
    SuggestionsList: {
        height:"100vh",
        display:"flex",
        flexDirection: "column",
        backgroundImage: `url(${background})`
        /* background by SVGBackgrounds.com */
    },
    container: {
        width: "70%",
        height:"100%",
        margin: "auto",
        display:"flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent:"flex-start",
        alignItems: "center"
    },
    suggestions: {
        marginTop: "2rem",
        width: "100%",
        height:"90%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%",
    }
};