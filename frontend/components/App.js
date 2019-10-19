import React from "react";
import Authentication from "./Authentication";
import SuggestionsList from "./SuggestionsList";
import SuggestionPage from "./SuggestionPage";
import {Switch, Route} from "react-router-dom";


function App() {
    return (
        <Switch>
            <Route exact path="/" render={(routerParams) => <Authentication hasAccount={true} {...routerParams}/>} />
            <Route exact path="/create-account" render={(routerParams) => <Authentication hasAccount={false} {...routerParams}/>} />
            <Route exact path="/suggestions" render={(routerParams) => <SuggestionsList {...routerParams}/>} />
            <Route exact path="/suggestions/:restId" render={() => <SuggestionPage />} />
        </Switch>
    )
}

export default App;
