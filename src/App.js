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
import { ContactPage } from './views/ContactPage';
import { ContactEdit } from './views/ContactEdit';
import { SignupPage } from './views/SignupPage';
import { ContactDetailsPage } from './views/ContactDetailsPage';
import { AppHeader } from './cmps/AppHeader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <AppHeader />
          <Switch>
            <Route path='/contacts/edit/:id?' component={ContactEdit} />
            <Route path='/contacts/:id' component={ContactDetailsPage} />
            <Route path="/statistic" component={StatisticPage}>
            </Route>
            <Route path='/signup' component={SignupPage} />
            <Route path="/contacts" component={ContactPage}>
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
