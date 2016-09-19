const axios = require('axios');

function getConstFromPostcode (postcode, callback) {
  axios.get("https://api.postcodes.io/postcodes/" + postcode)
    .then(function (response) {
      callback(response.data.result.parliamentary_constituency)
    })
    .catch(function (error) {
      callback(error)
    })
}

module.exports = {
  getConstFromPostcode: getConstFromPostcode
};