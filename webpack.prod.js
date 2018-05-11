const webpack = require('webpack');

/**
 * @type {webpack.Configuration}
 */
const configuration = {
    entry: './src/billing.module.ts',
    output: {
        filename: 'billing.bundle.js',
        path: __dirname + '/dist'
    },
    externals: {
        angular: 'angular'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    mode: 'production',
    module: {
        rules: [
            { test: /\.ts/, exclude: /node_modules/, loader: 'ts-loader' },
            { test: /\.html/, exclude: /node_modules/, loader: 'html-loader' },
        ]
    }
}

module.exports = configuration;