const axios = require('axios').default;
export const bitcoinService = {
  getRate
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
