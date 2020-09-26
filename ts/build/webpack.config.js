const merge = require('webpack-merge')
const baseConfig = require('./weboack.base.config.js')
const devConfig = require('./weboack.dev.config.js')
const proConfig = require('./weboack.pro.config.js')

module.exports = (env, argv) => {
    let config = argv.mode === 'development' ? devConfig : proConfig;
    return merge(baseConfig, config);
};