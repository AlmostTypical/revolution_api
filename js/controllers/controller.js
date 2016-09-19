const constituencyController = require('./constituency/constituency');

const constituencies = {
  getConstFromPostcode(postcode, callback) {
    constituencyController.getConstFromPostcode(postcode, callback);
  }
};

module.exports = {
  constituencies: constituencies
};