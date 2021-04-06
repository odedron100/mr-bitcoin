import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './assets/styles/main.scss'
import HomePage from './views/HomePage';
// import { ContactDetailsPage } from './views/ContactDetailsPage';
import { StatisticPage } from './views/StatisticPage';
import { ContactSystem } from './views/ContactSystem.jsx';
import { ContactEdit } from './views/ContactEdit';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path='/contacts/edit/:id?' component={ContactEdit} />
            <Route path="/statistic"> component={StatisticPage}
            </Route>
            <Route path="/contacts" component={ContactSystem}>
            </Route>
            <Route path="/" component={HomePage}>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
