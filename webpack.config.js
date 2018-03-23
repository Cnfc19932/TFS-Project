const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pathFolder = './registration/';

module.exports = {
  entry: [
    pathFolder + 'src/scripts/main.js',
    pathFolder + 'src/styles/default.less'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, pathFolder + 'public/dist/scripts')
  },
  devtool: 'source-map',
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../styles/default.css')
  ]
};
