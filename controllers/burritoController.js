var express = require("express");

var router = express.Router();

var cat = require("../models/burritos.js");

// Create the routes and associated logic
router.get('/', function(req, res) {
  burrito.selectAll(function(data) {
    var hbsObject = {
      burritos: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burritos', function(req, res) {
  burrito.insertOne([
    'burrito_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/burrito/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burrito.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;