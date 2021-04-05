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
      <div>
        <h3 className="title">FILTER</h3>
        <form className="contyact-filter" onSubmit={(ev) => ev.preventDefault()}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={this.handleChange}/>
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" value={phone} onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={email} onChange={this.handleChange}/>
          </div>
        </form>
      </div>
    )
  }
}
