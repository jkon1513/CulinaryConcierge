import React from "react";
import Authentication from "./Authentication";
import {Switch, Route} from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route exact path="/" render={(routerParams) => <Authentication hasAccount={true}/>} />
            <Route exact path="/create-account" render={(routerParams) => <Authentication hasAccount={false}/>} />
        </Switch>
    )
}

export default App;
