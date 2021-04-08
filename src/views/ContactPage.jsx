// import React, { Component, useState } from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import  {ContactList}  from '../cmps/ContactList.jsx';
import {ContactFilter} from '../cmps/ContactFilter.jsx';
import { loadContacts, removeContact } from '../store/actions/contactActions'

export class _ContactPage extends Component {
   state = {
    // contacts: null,
    filterBy:null
  }

  componentDidMount(){
    this.loadContacts();
  }

   loadContacts = () =>{
    this.props.loadContacts(this.state.filterBy)
   }

  onFilter = (filterBy)=>{
    this.setState({filterBy},this.loadContacts)
  }

  render() {
    const {contacts} = this.props;
    return (
     contacts && <div className="contacts-container container">
        <ContactFilter onFilter={this.onFilter}/>
        <Link className="add-contact" to="/contacts/edit">Add Contact</Link>
        <ContactList contacts={contacts}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contactReducer.contacts
  }
}

const mapDispatchToProps = {
  loadContacts,
  removeContact
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)


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
