"use strict"

const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: [
    path.resolve(__dirname, path.join("..", "src", "index.js"))
  ],
  output: {
    path: path.resolve(__dirname, path.join("..", "dist")),    
    filename: "app.js"
  },  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: 'sass-loader',
            options: {
              data: `@import "variables.scss";`,
              includePaths: [path.resolve(__dirname, path.join("..", "src", "styles"))]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        test: /\.(js|vue)$/,
        use: "eslint-loader",
        enforce: "pre"
      }
    ]
  },
  plugins: [    
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join("build", "templates", "index.html"),
      inject: true
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, path.join("..", "src", "static", "img")),
      to: path.resolve(__dirname, path.join("..", "dist", "static", "img")),
      toType: "dir"
    }])
  ]
}

