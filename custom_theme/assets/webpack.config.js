const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');




module.exports = {

    optimization: {
      minimizer: [new TerserPlugin({}), new OptimizeCssAssetsPlugin({})],
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader?url=false",
                "postcss-loader",
                "sass-loader",
            ],
        }        
      ]
    },

    plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        }),        
    ]    
  };