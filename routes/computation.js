
var express = require('express');
var router = express.Router();

/* GET computation endpoint. */
router.get('/', function(req, res) {

  // Generate a random value
  var x = Math.random() * 10;

  // Use the query value if x is provided
  if (req.query.x !== undefined) {
    x = Number(req.query.x);
  }

  // Apply the Math function
  var y = Math.atan(x);

  // Construct and send response
  var response = `Math.atan applied to ${x} is ${y}`;

  res.send(response);
});

module.exports = router;
