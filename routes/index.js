var express = require('express');
var router = express.Router();

var model = require('../models/records');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getRecord',function (req, res) {
    var key = req.body.key;
    model.find({ key : key }, function (err, docs) {
        if(err) {
          console.log(err);
        }else{
          console.log(key);
          res.send(docs);
        }
    });

});

module.exports = router;
