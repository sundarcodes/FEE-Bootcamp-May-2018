import React, { Component } from 'react';
import './App.css';
import LandingPage from './pages/Landing-Page/LandingPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostPage from './pages/posts-page/post-page';
import Header from './header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/posts" component={PostPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
