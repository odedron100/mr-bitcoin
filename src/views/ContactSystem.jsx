import React, { Component } from 'react'

import  {ContactPage}  from './ContactPage.jsx';
import  {ContactDetailsPage}  from './ContactDetailsPage.jsx';
import {
  Switch,
  Route
} from "react-router-dom";

export class ContactSystem extends Component {
  render() {
    const {match} = this.props;
    return (
      <Switch>
        <Route path={`${match.path}/:contactId`} component={ContactDetailsPage}>
        </Route>
        <Route path={`${match.path}`} component={ContactPage}>
        </Route>
      </Switch>
    )
  }
}
