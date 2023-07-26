const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/client/index.js",
    output: {
        libraryTarget: "var",
        library: "Client"
    },
    optimization: {
        minimizer: [new TerserWebpackPlugin({}), new CssMinimizerWebpackPlugin({})]
    },
    module: {
        rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.scss$/,
                    use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ]
                }
            ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
}