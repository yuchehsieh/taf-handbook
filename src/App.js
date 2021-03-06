import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import General from "./applets/general";
import HiringOperation from "./applets/hiringOperation";
import ReplyForInterviewAvailableTime from "./applets/replyForInterviewAvailableTime";
import ReplyToTheInterviewReview from "./applets/replyToTheInterviewReview";

import {routePath} from "./utils/constants";

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path={routePath.hiringOperation} exact component={HiringOperation}/>
                    <Route path={routePath.replyForInterviewAvailableTime} exact component={ReplyForInterviewAvailableTime}/>
                    <Route path={routePath.replyToTheInterviewReview} exact component={ReplyToTheInterviewReview}/>
                    <Route path={routePath.general} exact component={General}/>
                </Switch>
            </Router>
        )
    }
}

export default App;
