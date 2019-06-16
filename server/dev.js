const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack.dev.js')

const options = {
  contentBase: path.join(__dirname, 'dist'),
  port: 3000,
  publicPath: 'http://localhost:3000/',
  host: 'localhost',
  hot: true,
  stats: 'minimal',
  historyApiFallback: true,
  proxy: {
    '/api': {
      target: 'http://localhost:3030',
      pathRewrite: { '^/api': '' },
    },
  },
}
const compiler = webpack(config)
const server = new WebpackDevServer(compiler, options)

WebpackDevServer.addDevServerEntrypoints(config, options)
server.listen(3000, 'localhost', () => console.log('App listening on port 3000!\n'))
