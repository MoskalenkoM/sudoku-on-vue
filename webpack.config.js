/* eslint global-require: "off" */

const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "build.js"
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          formatter: require("eslint-friendly-formatter")
        }
      },
      {
        test: /\.pug$/,
        loader: "pug-plain-loader"
      },
      {
        test: /\.(css|postcss)$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: process.env.NODE_ENV === "production" ? "eval-sourcemap" : false
};
