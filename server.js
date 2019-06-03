const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

// const app = express()
const config = require('./webpack.dev.js')
const options = {
  contentBase: path.join(__dirname, 'dist'),
  port: 3000,
  publicPath: 'http://localhost:3000/',
  host: 'localhost',
  hot: true,
  open: true,
  stats: 'minimal',
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);


server.listen(3000, 'localhost', function () {
  console.log('Example app listening on port 3000!\n')
})