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
    performance: {
        hints: false
    },
    externals: 'jQuery'
};
