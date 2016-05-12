var express = require('express');
var app = express();
var bodyParser = require('body-parser')


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('app'));

var port = process.env.PORT || 8080;        // set our port

var router = express.Router();

var palindrome = require('./server/router.js');
app.use('/palindrome', palindrome);

app.listen(port, function () {
  console.log('Server rodando na porta ' + port);
});
