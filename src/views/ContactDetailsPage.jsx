import React, { Component } from 'react'

export class ContactDetailsPage extends Component {
  render() {
    return (
      <div className="contact-details-container">
        <button onClick={this.props.closeContactDetails}>X</button>
        <h3>Name:{this.props.contact.name}</h3>
        <h3>Phone:{this.props.contact.phone}</h3>
        <h3>Email:{this.props.contact.email}</h3>
      </div>
    )
  }
}
