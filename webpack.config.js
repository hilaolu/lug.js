const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    mode: 'development',
    output: {
        filename: 'lug.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'lug',
        libraryTarget: 'window',
        libraryExport: 'default'
    },
    plugins: [
        new webpack.DefinePlugin({
            'LUGJS_VERSION': JSON.stringify(process.env.npm_package_version),
        })
    ],
};