const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
    config.plugins.delete('prefetch')
  },
  productionSourceMap: false,

  devServer: {
    proxy: {
      "/api": {
        target: "http://www.woke20.com:3000",
        // target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
        changeOrigin: true
      },
      "/gpl": {
        target: "https://api.github.com",
        pathRewrite: { "^/gpl": "" },
        changeOrigin: true
      }
    }
  }
};
