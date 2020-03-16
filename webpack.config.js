const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        // 前台
        'common': path.join(__dirname, 'src/common/common'),
        'index': path.join(__dirname, 'src/page/index/index'),
        'detail': path.join(__dirname, 'src/page/detail/detail'),
        'archive': path.join(__dirname, 'src/page/archive/archive'),
        'links': path.join(__dirname, 'src/page/links/links'),
        'about': path.join(__dirname, 'src/page/about/about'),
        'result': path.join(__dirname, 'src/page/result/result'),
        // 后台
        'admin-index': path.join(__dirname, 'src/page/admin/index/index'),
        'admin-manage': path.join(__dirname, 'src/page/admin/manage/manage'),
        'admin-edit': path.join(__dirname, 'src/page/admin/edit/edit'),
        'admin-login': path.join(__dirname, 'src/page/admin/login/login'),
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
            '@': path.join(__dirname, 'src'),
            '@3': path.join(__dirname, 'node_modules'),
        },

    },
    externals: {
        // '$': 'jquery',
        // 'jquery': 'jquery',
        // 'window.jquery': 'jquery'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf|svg|gif|png)$/,
                use: ['url-loader']
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
        }),
        // 前台
        renderHtmlWebpackPlugin('index', '首页'),
        renderHtmlWebpackPlugin('detail', '详情'),
        renderHtmlWebpackPlugin('archive', '归档'),
        renderHtmlWebpackPlugin('links', '链接'),
        renderHtmlWebpackPlugin('about', '关于我'),
        renderHtmlWebpackPlugin('result', '结果'),
        // 后台
        renderHtmlWebpackPluginAsAdmin('index', '首页'),
        renderHtmlWebpackPluginAsAdmin('manage', '博文管理'),
        renderHtmlWebpackPluginAsAdmin('edit', '博文编辑'),
        renderHtmlWebpackPluginAsAdmin('login', '登录'),
    ],
}

// 提供后台页面
function renderHtmlWebpackPluginAsAdmin(templateName, title) {
    return new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/layout/admin/' + templateName + '.html'),
        filename: 'admin/' + templateName + '.html',
        chunks: ['vendor', 'common', 'admin-' + templateName],
        title: title + '-博客后台管理',
    })
}

// 提供前台页面
function renderHtmlWebpackPlugin(templateName, title) {
    return new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/layout/' + templateName + '.html'),
        filename: templateName + '.html',
        chunks: ['vendor', 'common', templateName],
        title: title + '-Xiaobucvg博客',
    })
}