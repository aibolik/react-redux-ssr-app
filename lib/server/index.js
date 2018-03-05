'use strict';

var path = require('path');
var express = require('express');
var handleRender = require('./handleRender.js');

var port = 3000;

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.get('*', handleRender);

app.listen(port, function () {
  console.info('Express listening on port ' + port);
});