const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './lambda.ts',
  output: {
    path: path.resolve('.'),
    filename: 'lambda.js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: [nodeExternals(), './config.json'],
  resolve: {
    mainFields: ['main', 'module'],
    extensions: ['.ts', '.js','.json'],
  },
}