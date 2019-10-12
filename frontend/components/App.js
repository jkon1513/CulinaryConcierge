import React from "react";
import Authentication from "./Authentication";
import SuggestionsList from "./SuggestionsList";
import {Switch, Route} from "react-router-dom";


function App() {
    return (
        <Switch>
            <Route exact path="/" render={(routerParams) => <Authentication hasAccount={true}/>} />
            <Route exact path="/create-account" render={(routerParams) => <Authentication hasAccount={false}/>} />
            <Route exact path="/suggestions" render={(routeParams) => <SuggestionsList />} />
        </Switch>
    )
}

export default App;
