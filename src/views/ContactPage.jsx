import React, { Component } from 'react'
import {contactsService} from '../services/contactService.js';
import  {ContactList}  from '../cmps/ContactList.jsx';
import  {ContactDetailsPage}  from './ContactDetailsPage.jsx';
import {ContactFilter} from '../cmps/ContactFilter.jsx';

export  class ContactPage extends Component {
   state = {
    contacts: null,
    selectedUser:null,
    filterBy:null
  }

  componentDidMount(){
    this.loadContacts();
  }

   loadContacts = async () =>{
    const contacts = await contactsService.getContacts(this.state.filterBy);
    this.setState({contacts})
   }

  onSelectedContact = async (contactId) =>{
    const selectedUser = await contactsService.getContactById(contactId)
    console.log('user', selectedUser);
    this.setState({selectedUser})
  }

  closeContactDetails (){
    this.setState({selectedUser:null})
  }

  onFilter = (filterBy)=>{
    this.setState({filterBy},this.loadContacts)
  }

  get contactDetails (){
    console.log('here');
      return this.state.selectedUser && (<ContactDetailsPage contact={this.state.selectedUser}/>)
  }

  render() {
    const {contacts} = this.state;
    return (
     contacts && <div className="contacts-container">
        <ContactFilter onFilter={this.onFilter}/>
        <ContactList contacts={contacts} onSelectedContact={this.onSelectedContact}/>
        {this.contactDetails}
      </div>
    )
  }
}
