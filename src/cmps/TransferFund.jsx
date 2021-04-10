import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { addMove } from '../store/actions/userActions.js'

export class TransferFund extends Component {
  state = {
    amount:'',
  }

  componentDidMount(){
    console.log('this.props', this.props);
  }

    handleChange = ({ target }) => {
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ amount:  value }))
    }

    onTransfer = () =>{
      if(this.props.maxCoins < this.state.amount){
        return alert('you dont have this money')
      }
      this.setState({amount: ''});
      this.props.onTransferCoins(this.state.amount)
      // this.props.addMove(this.state.amount,this.props.contact)
    }

    render() {
      const {contact} = this.props;
      const {amount} = this.state;
      console.log('amount', amount);
    return (
    contact && <section className="transfer-fund">
        <div>
          <input type="number" name="amount" value={amount} onChange={this.handleChange} />
          <button className="transfer-button app-button" onClick={this.onTransfer}>Transfer</button>
        </div>
      </section>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     user: state.userReducer.user,
//   }
// }

// const mapDispatchToProps = {
//   addMove
// }

// export const TransferFund = connect(mapStateToProps, mapDispatchToProps)(_TransferFund)
