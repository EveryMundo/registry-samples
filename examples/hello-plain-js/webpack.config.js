const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve("src", "index.js"),

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },

  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, "public", "setup.json") }],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: "index.html",
      inject: "body",
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    compress: true,
    hot: true,
    port: 9000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
};
