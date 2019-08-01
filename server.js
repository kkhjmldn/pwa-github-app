var express = require('express');
var path = require('path');
var serverStatic = require('server-static');

app = express();
app.use(serverStatic(__dirname+ "/dist"));

var port = process.env.PORT || 5000;

app.listen(port);