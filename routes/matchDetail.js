/**
 * Created by prateek on 11/6/17.
 */

var express = require('express');
var router = express.Router();
var connection = require('../databaseConnect');

/* GET match detail. */
router.get('/', function (req, res) {

    var id = req._parsedOriginalUrl.pathname;
    var matchId = '';

    for (var i in id) {
        if (i > 12) {
            matchId += id[i];
        }
    }

    matchId = parseInt(matchId);

    connection.query('select * from matches where id = ?', [matchId], function (err, result) {
        if (err) throw err;
        res.send(result[0]);
    });
});

module.exports = router;
