const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  outputDir: "moss-ui",
  productionSourceMap: false,
  lintOnSave: false,
  css: {
    extract: true,
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // "@primary-color": "#575fcf",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("copyWebpackPlugin").use(
      new CopyWebpackPlugin([
        {
          from: "components/**/*.less",
          to: "[path][name].[ext]",
          toType: "template",
        },
      ])
    );
  },
};
