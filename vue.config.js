const { defineConfig } = require('@vue/cli-service')
const manifestPlugin = require('webpack-manifest-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    if (!process.env.SSR) return

    config.target('node')
    config.output.libraryTarget('commonjs2')

    config.plugin('manifestPlugin').use(manifestPlugin, [{filename: "ssr-manifest.json"}])

    config.externals(nodeExternals({ allowlist: /\.(css|vue)$/ }))

    config.optimization.splitChunks(false).minimize(false);

    config.plugins.delete("hmr");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.plugins.delete("progress");
    config.plugins.delete("friendly-errors");
  }
})

// exports.chainWebpack = (webpackConfig) => {
//   if (!process.env.SSR) return

//   webpackConfig.target('node')
//   webpackConfig.output.libraryTarget('commonjs2')

//   webpackConfig.plugin('manifest').use(new manifestPlugin({ filename: "ssr-manifest.json" }))

//   webpackConfig.externals(nodeExternals({ allowlist: /\.(css|vue)$/ }))

//   webpackConfig.optimization.splitChunks(false).minimize(false);

//   webpackConfig.plugins.delete("hmr");
//   webpackConfig.plugins.delete("preload");
//   webpackConfig.plugins.delete("prefetch");
//   webpackConfig.plugins.delete("progress");
//   webpackConfig.plugins.delete("friendly-errors");

//   console.log(webpackConfig.toConfig())
// }
