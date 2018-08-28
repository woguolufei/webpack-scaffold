const path = require('path');

module.exports = {
    entry: require('./webpack-config/entry.config'),
    devtool: 'inline-source-map',
    plugins: require('./webpack-config/plugins.config'),
    output: require('./webpack-config/output.config'),
    optimization :require('./webpack-config/optimization.config'),
    resolve: require('./webpack-config/resolve.config'),
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    module: require('./webpack-config/module.config')
};