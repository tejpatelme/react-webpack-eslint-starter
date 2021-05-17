const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";

if ((process.env.NODE_ENV = "production")) {
  mode = "production";
}

module.exports = {
  mode: mode,

  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new htmlWebpackPlugin({
      title: "React Starter using Webpack",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],

  devtool: "inline-source-map",

  devServer: {
    historyApiFallback: true,
  },
};
