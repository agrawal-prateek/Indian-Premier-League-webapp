var express = require('express');
var router = express.Router();
var connection = require('../databaseConnect');

/* GET home page. */
router.get('/', function (req, res) {

    connection.query('select * from matches', function(err, result) {
        if (err) throw err;

        res.render('index', {
            match : result
        });
    });
});

module.exports = router;
