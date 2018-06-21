import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationRoutes from './registration/pages/registation-routes';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route path="" exact component={RegistrationRoutes} />
            {/* <Route path="" component={} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
