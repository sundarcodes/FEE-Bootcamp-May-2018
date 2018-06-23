import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationRoutes from './registration/pages/registation-routes';
import AdminRoutes from './admin/pages/admin-routes';
import InterviewerRoutes from './interviewer/pages/interviewer-routes';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route path="/admin" component={AdminRoutes} />
            <Route path="/interviewer" component={InterviewerRoutes} />
            <Route path="" component={RegistrationRoutes} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
