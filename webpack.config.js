const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })

    ]
};