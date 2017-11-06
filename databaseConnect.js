/**
 * Created by prateek on 11/5/17.
 */

var mysql = require('mysql');

/* database connection Info */
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'webapp'
});

/* Establish database connection */
connection.connect(function(err) {
    if (err) throw err;
    console.log('You are now connected...');
});

module.exports = connection;