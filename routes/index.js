var express = require('express');
var router = express.Router();
var contact = require('../models/contact');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET home page. */
router.post('/', function(req, res, next) {
   var a = req.body.name;
   var b = req.body.age;
   console.log(a, b);
   res.send(`${a} ${b}`);
});

// Show db
router.get('/xem', (req, res) => {
  contact.find({}, (err, data) => {
    res.send(data);
  })
})

module.exports = router;
