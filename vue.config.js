const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    lintOnSave: false,
    chainWebpack: (config) => {
        config.plugins.delete('prefetch')
        config.plugin('CompressionPlugin').use(CompressionPlugin)
    }
};