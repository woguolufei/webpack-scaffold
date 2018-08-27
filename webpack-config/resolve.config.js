var path = require('path');
var dirVars = require('./base.dir.config.js');

module.exports = {
    alias: {
        layout: path.resolve(dirVars.layoutDir, 'layout.js'),
    },

    // 当require的模块找不到时，尝试添加这些后缀后进行寻找
    extensions: ['.js', '.css']
};