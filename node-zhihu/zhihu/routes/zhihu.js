var express = require('express');
var router = express.Router();
var axios = require('axios');
/* GET home page. */


router.get('/', function (req, res, next) {
    axios.get('http://news-at.zhihu.com' + req.query.url).then(function (response) {
        res.send(response.data)
    }).catch(function (err) {
        console.log(err)
    });
});




module.exports = router;
