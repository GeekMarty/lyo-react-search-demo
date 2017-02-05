const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './app/index.jsx',
        react: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/js'),
        filename: 'search.bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
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
                ]
            },
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                use: ['eslint-loader'],
                enforce: 'pre'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'react',

            path: path.resolve(__dirname, './wwwroot/js'),

            filename: 'react.bundle.min.js',

            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ],
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app')
        ],
        extensions: ['.js', '.json', '.jsx']
    },
    performance: {
        hints: 'error'
    },
    externals: 'jQuery'
};
