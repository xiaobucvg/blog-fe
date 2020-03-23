const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        // 前台
        'common-client': path.join(__dirname, 'src/common/client/common'),
        'index': path.join(__dirname, 'src/page/index/index'),
        'detail': path.join(__dirname, 'src/page/detail/detail'),
        'archive': path.join(__dirname, 'src/page/archive/archive'),
        'links': path.join(__dirname, 'src/page/links/links'),
        'about': path.join(__dirname, 'src/page/about/about'),
        'result': path.join(__dirname, 'src/page/result/result'),
        // 后台
        'common-admin': path.join(__dirname, 'src/common/admin/common'),
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
                'common-client': {
                    test: path.join(__dirname, 'src', 'common', 'client'),
                    name: 'common-client',
                    priority: 10,
                    enforce: true,
                    minSize: 0,
                },
                'common-admin': {
                    test: path.join(__dirname, 'src', 'common', 'admin'),
                    name: 'common-admin',
                    priority: 10,
                    enforce: true,
                    minSize: 0,
                },
                'common-fun': {
                    test: path.join(__dirname, 'src', 'util'),
                    name: 'common-fun',
                    priority: 10,
                    enforce: true,
                    minSize: 0,
                },
                'service': {
                    test: path.join(__dirname, 'src', 'service'),
                    name: 'service',
                    priority: 10,
                    enforce: true,
                    minSize: 0,
                }
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
            {
                test: /\.tmpl$/,
                use: ['html-loader']
            }
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

    devServer: {
        hot: true,
        open: true,
        port: 5500,
        contentBase: path.join(__dirname, "dist"),
        proxy: {
            '/api': {
                changeOrigin: true,
                target: 'http://127.0.0.1:8080/',
                pathRewrite: { '^/api': '' },
                secue: false,
            },
        },
    }
}

// 提供后台页面
function renderHtmlWebpackPluginAsAdmin(templateName, title) {
    return new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/layout/admin/' + templateName + '.html'),
        filename: 'admin/' + templateName + '.html',
        chunks: ['vendor', 'common-css', 'common-admin', 'common-fun', 'service', 'admin-' + templateName],
        title: title + '-博客后台管理',
    })
}

// 提供前台页面
function renderHtmlWebpackPlugin(templateName, title) {
    return new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/layout/' + templateName + '.html'),
        filename: templateName + '.html',
        chunks: ['vendor', 'common-css', 'common-client', 'common-fun', 'service', templateName],
        title: title + '-Xiaobucvg博客',
    })
}