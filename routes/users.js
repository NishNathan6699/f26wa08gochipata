
var express = require('express');
var router = express.Router();

var vOne = 123;
var vTwo = 60;

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (vOne > vTwo) {
    vOne = vOne - vTwo;
  } else {
    vTwo = vTwo - vOne;
  }

  var response = `Values are: ${vOne} and ${vTwo}`;

  res.send(response);
});

module.exports = router;
