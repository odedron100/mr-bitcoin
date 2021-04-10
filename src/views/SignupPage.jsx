import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUser } from '../store/actions/userActions.js'

export  class _SignupPage extends Component {
  state = {
    user:null
  }

  handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ user: { ...prevState.user, [field]: value } }))
  }

  doSignUp = (ev) =>{
    // debugger
    ev.preventDefault()
    this.props.setUser(this.state.user)
    this.props.history.push('/')
  }

  render() {
    return (
       <div className="signup">
        <h4 className="title">Signup to MrBitcoin</h4>
        <form>
          <input
            name="name"
            type="text"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <button className="signup-button" onClick={this.doSignUp}>Signup</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.contactReducer.user
  }
}

const mapDispatchToProps = {
  setUser
}

export const SignupPage = connect(mapStateToProps, mapDispatchToProps)(_SignupPage)
