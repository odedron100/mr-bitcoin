import React, { Component } from 'react'
import { userService } from '../services/userService.js';
import { bitcoinService } from '../services/bitcoinService.js';

export default class HomePage extends Component {
   state = {
    user: null,
    currBitcoin:null,
  }

  async componentDidMount(){
    const user = await userService.getUser();
    const currBitcoin = await bitcoinService.getRate(user.coins);
    console.log('currBitcoin',currBitcoin );
    this.setState({user,currBitcoin})
  }
  render() {
    const {user,currBitcoin} = this.state;
    return (
      user && <div className="homePage-container">
        <div className="user-details">
          <h3 className="profile">PROFILE</h3>
          <div className="item"><p>name :</p> <h3 className="username">{user.name}</h3></div>
          <div className="item"><p>coins :</p> <h3 className="user-coins"> {user.coins} 💰</h3></div>
          <div className="item"><p>bitcoin :</p> <h3 className="user-bitcoin">bi{currBitcoin} 💰</h3></div>
        </div>
      </div>
    )
  }
}
