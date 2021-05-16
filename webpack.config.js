const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new htmlWebpackPlugin({
      title: "React Starter using Webpack",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};
