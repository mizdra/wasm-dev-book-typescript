const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.wasm'],
  },
  plugins: [new HtmlWebpackPlugin()],
}