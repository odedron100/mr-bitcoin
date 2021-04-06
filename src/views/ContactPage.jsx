// import React, { Component, useState } from 'react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {contactsService} from '../services/contactService.js';
import  {ContactList}  from '../cmps/ContactList.jsx';
import {ContactFilter} from '../cmps/ContactFilter.jsx';;

export class ContactPage extends Component {
   state = {
    contacts: null,
    filterBy:null
  }

  componentDidMount(){
    this.loadContacts();
  }

   loadContacts = async () =>{
    const contacts = await contactsService.getContacts(this.state.filterBy);
    this.setState({contacts})
   }

  onFilter = (filterBy)=>{
    this.setState({filterBy},this.loadContacts)
  }

  render() {
    const {contacts} = this.state;
    console.log('this.props', this.props);
    return (
     contacts && <div className="contacts-container container">
        <ContactFilter onFilter={this.onFilter}/>
        <Link className="add-contact" to="/contacts/edit">Add Contact</Link>
        <ContactList contacts={contacts}/>
      </div>
    )
  }
}

// const ContactDetails = () => {
//   return
// }

// Remove

// export const ContactPage = () => {
//   const [counter, setCounter] = useState(0);
//   const handlePlus = () => setCounter(counter+1);

//   return (
//     <div>
//       <button onClick={handlePlus}>+</button>
//       <div>{counter}</div>
//     </div>);
// }
