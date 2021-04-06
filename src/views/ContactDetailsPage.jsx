import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {contactsService} from '../services/contactService.js';

export class ContactDetailsPage extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
      console.log('this.props', this.props);
        this.loadContact()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }

    onRemoveContact = async (id) =>{
    await contactsService.deleteContact(id)
    this.props.history.push('/contacts')
  }

    async loadContact() {
        const contact = await contactsService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }

  render() {
    const {contact} = this.state;
    return (
    contact &&  <div className="contact-details-container">
        <div>
          <h3 className="contact-title">contact details</h3>
          <h5>Name:{contact.name}</h5>
          <h5>Phone:{contact.phone}</h5>
          <h5>Email:{contact.email}</h5>
        </div>
        <footer>
          <Link className="edit" to={'/contacts/edit/' + contact._id}>Edit</Link>
          <button className="remove-contact" onClick={() => this.onRemoveContact(contact._id)}>Delete</button>
        </footer>
      </div>
    )
  }
}
