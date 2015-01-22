var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3003',
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['','.jsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ },
    ]
  }
};
