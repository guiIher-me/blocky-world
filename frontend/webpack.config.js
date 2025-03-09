/* eslint-disable no-undef */
const webpack = require('webpack');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const dotenv = require('dotenv');
const fs = require('fs');

const env = dotenv.config().parsed;

// Verifica se os arquivos de certificado existem
if (!fs.existsSync(env.PROTECTED_HTTPS_KEY) || !fs.existsSync(env.PROTECTED_HTTPS_CERT)) {
  throw new Error('Certificado ou chave privada não encontrados. Verifique os caminhos no arquivo .env.');
}

const publicEnvKeys = Object.keys(env)
  .filter(key => key.startsWith('PUBLIC_'))
  .reduce((acc, key) => {
      acc[`process.env.${key}`] = JSON.stringify(env[key]);
      return acc;
}, {});

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
    server: {
      type: 'https',
      options: {
        key: fs.readFileSync(env.PROTECTED_HTTPS_KEY),
        cert: fs.readFileSync(env.PROTECTED_HTTPS_CERT),
      },
    },
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
    new webpack.DefinePlugin(publicEnvKeys),
  ],
  mode: 'development',
};