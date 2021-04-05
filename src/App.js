import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './assets/styles/main.scss'
import HomePage from './views/HomePage';
// import { ContactDetailsPage } from './views/ContactDetailsPage';
import { ContactPage } from './views/ContactPage';
// import { StatisticPage } from './views/StatisticPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            {/* <Route path="/statistic">
              <StatisticPage />
            </Route> */}
            {/* <Route path="/details">
              <ContactDetailsPage />
            </Route> */}
            <Route path="/contacts">
              <ContactPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
