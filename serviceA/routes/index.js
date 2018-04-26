var express = require('express');
var router = express.Router();
const request = require('request-promise');

/* GET home page. */
router.get('/', function(req, res, next) {
    let url = 'http://' + process.env.SERVICEB_HOST+':'+process.env.SERVICEB_PORT+'/';
    request(url).then( () => {
        res.render('index', { title: 'Express' });
    }).catch(res.json.bind(res));
});

module.exports = router;
