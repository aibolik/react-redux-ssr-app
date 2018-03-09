'use strict';

require('dotenv').config();
var path = require('path');
var express = require('express');
var handleRender = require('./handleRender.js');
var webpack = require('webpack');
var cookieParser = require('cookie-parser');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackClientConfig = require('../../config/webpack.prod');

var isProduction = process.env.PRODUCTION;

var port = 3000;

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cookieParser());

if (!isProduction) {
  Object.assign(webpackClientConfig.output, { path: '/' });
  app.use(webpackDevMiddleware(webpack(webpackClientConfig), {}));
}

app.use(express.static('public'));
app.get('*', handleRender);

app.listen(port, function () {
  console.info('Express listening on port ' + port);
});