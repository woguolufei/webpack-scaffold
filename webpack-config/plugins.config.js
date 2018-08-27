const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let pageObj = require('./entry.config.js');

let configPlugins = [
    new CleanWebpackPlugin(['dist'])
];

for (let key of Object.keys(pageObj)) {

    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `${key}.html`,
        template: pageObj[key],
        chunks: [key],
        hash: true, // 为静态资源生成hash值
        xhtml: true,
    });
    configPlugins.push(htmlPlugin);
}

module.exports = configPlugins