const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'common': path.join(__dirname, 'src/common/common'),
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
        },

    },
    externals: {
        '$': 'jquery',
        'jquery': 'jquery',
        'window.jquery': 'jquery'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.eot$|\.svg$|\.ttf$|\.woff$|\.woff2/,
                use: ['url-loader']
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
        }),

        renderHtmlWebpackPlugin('index', '首页')
    ],
}


function renderHtmlWebpackPlugin(templateName, title) {
    return new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/layout/' + templateName + '.html'),
        chunks: ['vendor', 'common', templateName],
        title: title + '-博客',
    })
}