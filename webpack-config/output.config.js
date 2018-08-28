var dirVars = require('./base.dir.config.js');

module.exports = {
    path: dirVars.buildDir,
    filename: '[name].[contenthash].js'
};