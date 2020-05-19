const path = require('path')
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');

module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}