import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import General from "./applets/general";
import HiringOperation from "./applets/hiringOperation";
import {routePath} from "./utils/constants";

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path={routePath.hiringOperation} exact component={HiringOperation}/>
                    <Route path={routePath.general} exact component={General}/>
                </Switch>
            </Router>
        )
    }
}

export default App;
