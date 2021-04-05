const axios = require('axios').default;
export const bitcoinService = {
  getRate,
  getMarketPrice,
  getAvgBlockSize
}

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
  return axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
    .then(res => {
      console.log('res.data', res.data);
      return res.data;
    })
    .catch(err => {
      console.log('Service got Error:', err);
    })
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
