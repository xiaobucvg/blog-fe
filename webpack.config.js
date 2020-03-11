const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'index': path.join(__dirname, 'src/page/index'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].[hash].js',
    },

    optimization: {
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                vendor: {
                    test: path.join(__dirname, 'node_modules'),
                    name: 'vendor',
                    priority: 10,
                    enforce: true,
                    minSize: 0,
                },
                common: {
                    test: path.join(__dirname, 'src', 'common'),
                    name: 'common',
                    priority: 10,
                    enforce: true,
                    minSize: 0,
                },
            }
        }
    },

    resolve: {
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
        }),

        renderHtmlWebpackPlugin('index')
    ],
}


function renderHtmlWebpackPlugin(templateName) {
    return new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/html/' + templateName + '.html'),
        chunks: ['vendor', 'common', templateName]
    })
}