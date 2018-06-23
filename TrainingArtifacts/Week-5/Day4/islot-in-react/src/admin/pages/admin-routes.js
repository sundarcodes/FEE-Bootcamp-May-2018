import React, { Component } from 'react';
import Header from '../../common/components/header';
import AdminDashboard from './admin-dashboard';
import AdminEventView from './admin-event-view';
import { Route, Switch } from 'react-router-dom';
import AdminAnalytics from './admin-analytics';

function AdminRoutes({ match }) {
    return (
        <div>
            <Header isAdmin={true} />
            <Switch>
                <Route path={match.url + "/event"} component={AdminEventView} />
                <Route path={match.url + "/analytics"} component={AdminAnalytics} />
                <Route path={match.url} exact component={AdminDashboard} />
            </Switch>
        </div>
    )
}

export default AdminRoutes; 