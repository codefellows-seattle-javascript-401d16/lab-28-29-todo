'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  devServer: {
    historyApiFallback: true, //For handling undefined routes...?
  },

  entry: `${__dirname}/src/main.js`, //defining our entry point

  output: {
    filename: 'bundle-[hash].js', //[hash] gives it a randomized string
    path: `${__dirname}/build`, //Where the build goes after it is put together
    publicPath: '/', //The access point on the public facing side of it's 'life'
  },

  plugins: [
    new HTMLPlugin({template: `${__dirname}/src/index.html`}),
    new ExtractPlugin('bundle-[hash].css'),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
};
