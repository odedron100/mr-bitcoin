import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { userService } from '../services/userService.js';
// import { bitcoinService } from '../services/bitcoinService.js';
import { setUser } from '../store/actions/userActions.js'
import { getUser } from '../store/actions/userActions.js'
import { getBtcRate } from '../store/actions/userActions.js'

export  class _HomePage extends Component {
   state = {
    user: null,
    currBtc:null,
  }


    componentDidMount = () =>{
      this.loadCurrUser();
      this.loadBtcRate();
    }

  loadCurrUser = async () =>{
    await this.props.getUser();
    this.setState({user:this.props.user})
  }

   loadBtcRate = async () =>{
    await this.props.getUser();
    await this.props.getBtcRate(this.state.user.coins);
    this.setState({currBtc:this.props.btc})
  }

  render() {
    const {user,currBtc} = this.state;
    return (
      user && <div className="homePage-container">
        <div className="user-details">
          <h3 className="profile">PROFILE</h3>
          <div className="item"><p>name :</p> <h3 className="username">{user.name}</h3></div>
          <div className="item"><p>coins :</p> <h3 className="user-coins"> {user.coins} 💰</h3></div>
          <div className="item"><p>bitcoin :</p> <h3 className="user-bitcoin">{currBtc} 💰</h3></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    btc:state.userReducer.btc
  }
}

const mapDispatchToProps = {
  setUser,
  getUser,
  getBtcRate
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)
