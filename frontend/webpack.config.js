/* eslint-disable no-undef */
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',  // HMR client
    './src/main.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'main.js',
    publicPath: '/js/',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              process.env.NODE_ENV !== 'production' && 'react-refresh/babel',
            ].filter(Boolean),
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8080,
    hot: true, // Habilita Hot Module Replacement (HMR)
    open: true, // Abre automaticamente o navegador
    historyApiFallback: {
      rewrites: [
        { from: /^\/login/, to: '/index.html' },
        { from: /^\/signup/, to: '/index.html' },
      ],
    },
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
  mode: 'development',
};