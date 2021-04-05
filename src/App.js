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
import { StatisticPage } from './views/StatisticPage';
import { ContactSystem } from './views/ContactSystem.jsx';
import './App.css';

const DetailsPage = (props) => {
  console.log('props', props);
  return <div>Elior!!</div>;
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/statistic">
              <StatisticPage />
            </Route>
            {/* <Route path="/details">
              <ContactDetailsPage />
            </Route> */}
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
