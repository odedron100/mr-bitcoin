import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {contactsService} from '../services/contactService.js';

export class ContactDetailsPage extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
      console.log('this.props.match.params.contactId', this.props.match.params.contactId);
        this.loadContact()
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.match.params.id !== this.props.match.params.contactId) {
    //         this.loadContact()
    //     }
    // }

    async loadContact() {
        const contact = await contactsService.getContactById(this.props.match.params.contactId)
        this.setState({ contact })
    }

  render() {
    const {contact} = this.state;
    return (
    contact &&  <div className="contact-details-container">
        <h3 className="contact-title">contact details</h3>
        <h5>Name:{contact.name}</h5>
        <h5>Phone:{contact.phone}</h5>
        <h5>Email:{contact.email}</h5>
        <Link to={'/contacts/edit/' + contact._id}>Edit</Link>
      </div>
    )
  }
}
