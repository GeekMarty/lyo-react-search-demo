const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './app/index.jsx',
        react: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/js'),
        filename: 'search.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx)?$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['es2015', { modules: false }],
                                'react'
                            ],
                            plugins: ['transform-object-rest-spread']
                        }
                    }
                ],
                enforce: 'pre'
            },
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                use: ['eslint-loader'],
                enforce: 'pre'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                enforce: 'post'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'react',

            path: path.resolve(__dirname, './wwwroot/js'),

            filename: 'react.bundle.js',

            minChunks: Infinity
        })
    ],
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app')
        ],
        extensions: ['.js', '.json', '.jsx', '.css']
    },
    devtool: 'source-maps',
    watchOptions: {
        aggregateTimeout: 300
    },
    performance: {
        hints: false
    },
    externals: 'jQuery'
};
