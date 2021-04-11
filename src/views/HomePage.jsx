import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { userService } from '../services/userService.js';
// import { bitcoinService } from '../services/bitcoinService.js';
import {MovesList} from '../cmps/MovesList';
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
          <h3 className="title">Hello {user.name},</h3>
          <div>
            <div className="item"><p>you have <span className="user-coins">${user.coins}</span> coins 💰</p></div>
            <div className="item"><p>you have <span className="user-bitcoin">${currBtc}</span> bitcoin 💰</p></div>
          </div>
        <div className="user-moves">
          <h3 className="moves-title">Your last moves</h3>
          <MovesList moves={user.moves.slice(0,3)}/>
        </div>
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
