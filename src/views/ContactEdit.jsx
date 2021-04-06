import React, { Component } from 'react'
import {contactsService} from '../services/contactService.js';

export class ContactEdit extends Component {
  // inputRef = React.createRef()
  state = {
        contact: null,
        errMsg: ''
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        console.log('id',id );
        try {
            const contact = id ? await contactsService.getContactById(id) : contactsService.getEmptyContact()
            console.log('contact', contact);
            this.setState({ contact })
        } catch (err) {
            this.setState({ errMsg: 'contact Not Found' })
        }
        // this.inputRef.current.focus()
    }

    handleChange = ({ target }) => {
      console.log('this.state.contact', this.state.contact);
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
    }
    onSaveContact = async (ev) => {
        ev.preventDefault()
        await contactsService.saveContact({ ...this.state.contact })
        this.props.history.push('/contacts')
    }
    render() {
        if (!this.state.contact) return <div>{this.state.errMsg || 'Loading'}</div>
        const { name, email, phone } = this.state.contact
        return (
            <form className='robot-edit' onSubmit={this.onSaveContact}>
                <label htmlFor="name">Name</label>
                <input  required type="text" id="name" value={name} onChange={this.handleChange} name="name" />

                <label htmlFor="email">Email</label>
                <input required type="text" id="email" value={email} onChange={this.handleChange} name="email" />

                <label htmlFor="phone">Phone</label>
                <input required type="text" id="phone" value={phone} onChange={this.handleChange} name="phone" />

                <p>{this.state.errMsg}</p>
                <button>Save Contact</button>
            </form>
        )
    }
}
