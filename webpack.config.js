const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './app/index.jsx',
    output: {
        path: path.resolve(__dirname, './wwwroot/js'),
        filename: 'search.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app')
        ],
        extensions: ['.js', '.json', '.jsx']
    },
    devtool: 'eval',
    watch: true,
    watchOptions: {
        aggregateTimeout: 300
    },
    externals: 'jQuery'
};
