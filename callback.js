const express = require('express')
const bodyParser = require('body-parser');
const app = express()
var mysql = require('mysql');
var datetime = require('node-datetime');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createPool({
  host: "localhost",
  user: "MY_USER",
  password: "MY_PASSWORD",
  database: "MY_DATABASE"
});

app.post('/', function (req, res) {
        res.end("ACK");

		check_some_value = 0;
        if(req.body.MY_VAR == 'MY_VALUE')
			check_some_value = 1;

        con.query("MY UPDATE QUERY", function (err, result, fields) {
			if (err) throw err;
			console.log(result);
		  });
});

app.listen(3000, function () {
  console.log('Service listening on port 3000!')
})
