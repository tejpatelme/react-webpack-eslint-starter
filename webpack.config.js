const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = process.env.NODE_ENV === "production" ? "production" : "development";

//Temporary fix for live reloading bug in Webpack 5
let target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

module.exports = {
  mode: mode,

  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "React Starter using Webpack",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],

  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          name: "vendor",
          test: /node_modules/,
          chunks: "all",
          priority: 1,
        },
      },
    },
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "inline-source-map",

  devServer: {
    historyApiFallback: true,
    contentBase: "./dist",
    hot: true,
  },

  target: target,
};
