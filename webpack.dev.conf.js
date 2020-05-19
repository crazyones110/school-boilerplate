const base = require('./webpack.base.conf')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  ...base,
  mode: 'development',
  entry: {
    index: './src/index.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: '全媒体'
    }),
  ]
}