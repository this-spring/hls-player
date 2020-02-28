/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-02-29 01:34:50
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-02-29 01:43:40
 */
const path = require('path');

module.exports = {
  entry: './src/hls.ts',
  devtool: 'inline-source-map',
  output: {
    filename: 'hls-player.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
};