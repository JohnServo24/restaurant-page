const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackplugin({
            title: 'Restaurant Page',
            filename: 'index.html',
            template: './src/pages/template.html',
        })
    ]
}