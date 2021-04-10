import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './assets/styles/main.scss'
import {HomePage} from './views/HomePage';
// import { ContactDetailsPage } from './views/ContactDetailsPage';
import { StatisticPage } from './views/StatisticPage';
import { ContactPage } from './views/ContactPage';
import { ContactEdit } from './views/ContactEdit';
import { SignupPage } from './views/SignupPage';
import { ContactDetailsPage } from './views/ContactDetailsPage';
import { AppHeader } from './cmps/AppHeader';
import './App.css';
// import './AppHeader.scss';

function App () {
  const PrivateRoute = (props) =>{
    const isLoggedin = sessionStorage.getItem('loggedinUser') || false;
    return isLoggedin ? <Route component={props.component} path={props.path}/> : <Redirect to ="/signup"/>
  }
    return (
      <div className="app">
        <Router>
          <AppHeader />
          <div className="main-container">
          <Switch>
            <Route path='/statistic' component={StatisticPage}/>
            <PrivateRoute path='/contacts/edit/:id?' component={ContactEdit} />
            <PrivateRoute path='/contacts/:id' component={ContactDetailsPage} />
            {/* </Route> */}
            <Route path='/signup' component={SignupPage} />
            <PrivateRoute path='/contacts' component={ContactPage}/>
            <PrivateRoute path='/' component={HomePage}/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }

export default App;
