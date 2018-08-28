const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const dirVars = require('./base.dir.config.js');

let pageObj = require('./entry.config.js');

let configPlugins = [
    new CleanWebpackPlugin(['dist'], {
        root: dirVars.staticRootDir
    })
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