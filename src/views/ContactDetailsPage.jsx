import React, { Component } from 'react'

export class ContactDetailsPage extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div className="contact-details-container">
        {/* <button onClick={this.props.closeContactDetails}>X</button>
        <h3 className="contact-title">contact details</h3>
        <h5>Name:{this.props.contact.name}</h5>
        <h5>Phone:{this.props.contact.phone}</h5>
        <h5>Email:{this.props.contact.email}</h5> */}
        Elior hamelech!
      </div>
    )
  }
}
