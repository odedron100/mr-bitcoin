import { utilService } from './utilService.js';
const axios = require('axios').default;
export const bitcoinService = {
  getRate,
  getMarketPrice,
  getAvgBlockSize,
  // getConfirmedTransactions
}

const TRANSACTIONS_DB = 'transactions'
const MARKET_DB = 'market';

function getRate(value) {
  return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${value}`)
    .then(res => {
      console.log('res', res);
      return res.data;
    })
    .catch(err => {
      console.log('Service got Error:', err);
    })
}

function getMarketPrice() {
  let market = utilService.loadFromStorage(MARKET_DB)
    if (!market){
      return axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
        .then(res => {
          market = res.data;
          utilService.saveToStorage(MARKET_DB,market)
          console.log('res.data', res.data);
          return res.data;
        })
        .catch(err => {
          console.log('Service got Error:', err);
        })
      }
      return market
}

function getAvgBlockSize() {
  return axios.get(`https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true`)
    .then(res => {
      console.log('res.data', res.data);
      return res.data;
    })
    .catch(err => {
      console.log('Service got Error:', err);
    })
}

// function getConfirmedTransactions() {
//     let transactions = utilService.loadFromStorage(TRANSACTIONS_DB);
//     if (!transactions) {
//         return axios.get(`https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`)
//             .then(res => {
//                 transactions = res.data.values;
//                utilService. saveToStorage(TRANSACTIONS_DB, transactions)
//                 return res.data.values;
//             })
//             .catch(function (error) {
//                 console.log(error);
//                 return error;
//             })
//     }
//     return transactions;
// }
