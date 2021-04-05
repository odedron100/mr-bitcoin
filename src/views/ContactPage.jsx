// import React, { Component, useState } from 'react'
import React, { Component } from 'react'
import {contactsService} from '../services/contactService.js';
import  {ContactList}  from '../cmps/ContactList.jsx';
import  {ContactDetailsPage}  from './ContactDetailsPage.jsx';
import {ContactFilter} from '../cmps/ContactFilter.jsx';

export class ContactPage extends Component {
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
    // this.setState({selectedUser})
    this.props.history.push(`${this.props.match.path}/${selectedUser._id}`);
  }

  closeContactDetails = () =>{
    console.log('remove');
    this.setState({selectedUser:null},this.loadContacts)
  }

  onFilter = (filterBy)=>{
    this.setState({filterBy},this.loadContacts)
  }

  get contactDetails (){
    console.log('here');
      return this.state.selectedUser && (<ContactDetailsPage contact={this.state.selectedUser} closeContactDetails={this.closeContactDetails}/>)
  }

  render() {
    const {contacts} = this.state;
    const {match} = this.props;
    console.log('this.props', this.props);
    return (
     contacts && <div className="contacts-container container">
        <ContactFilter onFilter={this.onFilter}/>
        <ContactList contacts={contacts} onSelectedContact={this.onSelectedContact}/>
        {this.contactDetails}

        {/* <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch> */}
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
