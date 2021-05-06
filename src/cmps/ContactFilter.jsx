import React, { Component } from 'react'

export class ContactFilter extends Component {
  state = {
    name: '',
    phone: '',
    email:''
  }

  handleChange = ({target})=>{
    const field = target.name
    const value = target.type === 'number' ? +target.value :target.value
    this.setState({[field]:value},()=>{
      this.props.onFilter({...this.state})
    })
  }
  render() {
    const {name,phone,email} = this.state;
    return (
      <div className="filter">
        <form className="contact-filter" onSubmit={(ev) => ev.preventDefault()}>
          <div>
            <input type="text" id="name" name="name" value={name} onChange={this.handleChange} placeholder="Name.."/>
          </div>

          <div>
            <input type="text" id="phone" name="phone" value={phone} onChange={this.handleChange} placeholder="Phone.."/>
          </div>
          <div>
            <input type="text" id="email" name="email" value={email} onChange={this.handleChange} placeholder="Email.."/>
          </div>
        </form>
      </div>
    )
  }
}
