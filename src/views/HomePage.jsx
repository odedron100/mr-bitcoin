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
          <h3 className="username"> name :{user.name}</h3>
          <h3 className="user-coins"> coins :{user.coins} 💰</h3>
          <h3 className="user-bitcoin">bitcoin :{currBitcoin} 💰</h3>
        </div>
      </div>
    )
  }
}
