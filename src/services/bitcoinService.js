const axios = require('axios').default;
export default {
  getRate
}

function getRate(value) {
  return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${value}`)
    .then(res => {
      console.log('res', res);
      return res;
    })
    .catch(err => {
      console.log('Service got Error:', err);
    })
}
