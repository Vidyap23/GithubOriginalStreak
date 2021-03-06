const webpack = require('webpack');

module.exports = {
    entry: {
        'chrome/src/inject': './src/index.js',
        'firefox/data/inject': './src/index.js'
    },
    output: {
        libraryTarget: 'umd',
        path: '.',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?presets[]=es2015'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en)$/)
    ]
};
