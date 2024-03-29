import React, { Component } from 'react';
import { bitcoinService } from '../services/bitcoinService.js';
import {Chart} from '../cmps/Chart';

export class StatisticPage extends Component {
     state = {
        marketPrice: null,
        avgBlockSize:null
    }

    componentDidMount() {
        this.loadMarketPrice()
        this.loadAvgBlockSize();
    }

    async loadMarketPrice() {
        const marketPrice = await bitcoinService.getMarketPrice()
        this.setState({ marketPrice })
    }

    async loadAvgBlockSize() {
        const avgBlockSize = await bitcoinService.getAvgBlockSize()
        console.log('avgBlockSize', avgBlockSize);
        this.setState({ avgBlockSize })
    }

    getMarketPriceValues(){
        const values = this.state.marketPrice.values.map(value => value.y)
        return values
    }

    getAvgBlockSize(){
        const values = this.state.avgBlockSize.values.map(value => value.y)
        return values
    }
render() {
  const { marketPrice, avgBlockSize} = this.state
        if(!marketPrice || !avgBlockSize) return <h1>Chart Loading...</h1>
    return (
      <div>
          <Chart title={marketPrice.name} data={this.getMarketPriceValues()} color={'red'}/>
          <Chart title={avgBlockSize.name} data={this.getAvgBlockSize()} color={'red'}/>
      </div>
    )
  }
}
