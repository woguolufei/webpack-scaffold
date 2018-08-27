const path = require('path');
const glob = require('glob');
const dirVars = require('./base.dir.config.js');

let configEntry = {};

glob('*.js', {
    cwd: dirVars.pagesDir, // 在pages目录里找
    sync: true, // 这里不能异步，只能同步
    matchBase: true //包含子目录
}).forEach((page) => {
    if (path.dirname(page) == '.') {
        configEntry[path.basename(page, '.js')] = path.resolve(dirVars.pagesDir, page);
    } else {
        configEntry[path.dirname(page) + '/' + path.basename(page, '.js')] = path.resolve(dirVars.pagesDir, page);
    }
});

module.exports = configEntry;