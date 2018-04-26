var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    setTimeout( function() {
        res.json({date: new Date()})
    }, process.env.WAIT);
});

module.exports = router;
