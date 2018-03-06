require('dotenv').config();
const path = require('path');
const express = require('express');
const handleRender = require('./handleRender.js');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackClientConfig = require('../../config/webpack.prod');

const isProduction = process.env.PRODUCTION;

const port = 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


if (!isProduction) {
  Object.assign(webpackClientConfig.output, { path: '/' });
  app.use(webpackDevMiddleware(webpack(webpackClientConfig), {}));
}

app.use(express.static('public'));
app.get('*', handleRender);

app.listen(port, () => {
  console.info(`Express listening on port ${port}`);
});
