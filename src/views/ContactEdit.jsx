import React, { Component } from 'react'
import { connect } from 'react-redux'
import {contactsService} from '../services/contactService.js';
import { saveContact } from '../store/actions/contactActions'

export class _ContactEdit extends Component {
  // inputRef = React.createRef()
  state = {
        contact: null,
        errMsg: ''
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        try {
            const contact = id ? await contactsService.getContactById(id) : contactsService.getEmptyContact()
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
        this.props.saveContact(this.state.contact);
        this.props.history.push('/contacts')
    }
    render() {
        if (!this.state.contact) return <div>{this.state.errMsg || 'Loading'}</div>
        const { name, email, phone,img } = this.state.contact
        return (
            <form className='contact-edit' onSubmit={this.onSaveContact}>
                <h3>Edit your contact</h3>
                <div>
                    <label htmlFor="name">Name</label>
                    <input  required type="text" id="name" value={name} onChange={this.handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input required type="text" id="email" value={email} onChange={this.handleChange} name="email" />
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input required type="text" id="phone" value={phone} onChange={this.handleChange} name="phone" />
                </div>
                <div>
                    <label htmlFor="img">Img</label>
                    <input required type="text" id="img" value={img} onChange={this.handleChange} name="img" />
                </div>

                <p>{this.state.errMsg}</p>
                <button class="app-button">Save Contact</button>
            </form>
        )
    }
}


const mapDispatchToProps = {
  saveContact
}

export const ContactEdit = connect(null, mapDispatchToProps)(_ContactEdit)
