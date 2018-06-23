import React from 'react';
import Header from "../../common/components/header";
import InterviewerEventView from "./interviewer-event-view";
import { Switch, Route } from 'react-router-dom';
import InterviewerDashboard from "./interviewer-dashboard";

function InterviewerRoutes({ match }) {
    return (
        <div>
            <Header />
            <Switch>
                <Route path={match.url + "/event"} component={InterviewerEventView} />
                <Route path={match.url + ""} component={InterviewerDashboard} />
            </Switch>
        </div>
    )
}

export default InterviewerRoutes;