var webpack = require('webpack');

module.exports = {
  entry: "./03-environment/src/index.js",
  output: {
    path: __dirname + '/03-environment/public/build',
    publicPath: "build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.gif$/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
      },
      {
        test: /\.jpg$/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=10000&mimetype=image/png"
      },
      {
        test: /\.svg/,
        loader: "url-loader?limit=26000&mimetype=image/svg+xml"
      },
      {
        test: /\.jsx$/,
        loader: "react-hot!babel",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  }
}
