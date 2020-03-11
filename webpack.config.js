const path = require('path');

module.exports = {
    entry: {
        'index': path.join(__dirname, 'src/page/index'),
    },
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: '[name].[hash].js',
    }
}