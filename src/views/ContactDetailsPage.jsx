import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {contactsService} from '../services/contactService.js';
import {TransferFund} from '../cmps/TransferFund';
import {MovesList} from '../cmps/MovesList';
import { getUser } from '../store/actions/userActions.js'
import { updateUser } from '../store/actions/userActions.js'

export class _ContactDetailsPage extends Component {
    state = {
        contact: null,
    }

    componentDidMount() {
        this.loadContact()
        this.loadCurrUser()
    }

    loadCurrUser = async () =>{
    await this.props.getUser();
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

    onTransferCoins = (amount) =>{
      this.props.updateUser(amount,this.state.contact)
      this.loadCurrUser()
    }

  render() {
    const {contact} = this.state;
    const {user} = this.props;

    console.log('user from component', user);

    console.log('contact && user', contact && user);
    return (

      contact && user && <section className="contact-details container">
        <div className="contact-details-container">
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
          <TransferFund contact={contact} onTransferCoins={this.onTransferCoins} maxCoins={user.coins}/>
          <MovesList moves={user.moves} toUser={contact}/>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
  }
}

const mapDispatchToProps = {
  getUser,
  updateUser
}

export const ContactDetailsPage = connect(mapStateToProps, mapDispatchToProps)(_ContactDetailsPage)
