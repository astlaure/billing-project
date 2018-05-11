const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @type {webpack.Configuration}
 */
const configuration = {
    entry: './stub/app.module.ts',
    output: {
        filename: 'app.bundle.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    mode: 'development',
    module: {
        rules: [
            { test: /\.ts/, exclude: /node_modules/, loader: 'ts-loader' },
            { test: /\.html/, exclude: /node_modules/, loader: 'html-loader' },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './stub/index.html'
        })
    ]
}

module.exports = configuration;
