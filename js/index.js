const express = require('express');
const app = express();
const controller = require('./controllers/controller');

app.get('/api/:postcode', function (req, res) {
  var postcode = req.params.postcode;
  console.log('finding /api/' + postcode);
  controller.constituencies.getConstFromPostcode(postcode, function (data, err) {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      res.status(200).json(data);
    }
  })
});

app.listen(3000, function () {
  console.log('Revolution API running on port 3000')
});

