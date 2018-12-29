// https://webpack.jakoblind.no/

const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: "MindPalace"
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    resolveLoader: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'utils/loaders')
        ]
    },
    module: {
        rules: [{
            enforce: "pre",
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: "eslint-loader"
        }, {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.obj$/,
            use: [{
                loader: 'obj-loader'
            }]
        }, {
            test: /\.mtl$/,
            use: [{
                loader: 'mtl-loader'
            }]
        }]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'assets/**/*' }
        ]),
        new HtmlWebpackPlugin({
            inject: false,
            title: 'Mind Palace',
            template: 'src/index.html'
        })
    ]
};