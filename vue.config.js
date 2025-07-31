const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  // 修改 html-webpack-plugin 配置
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      // args[0] 就是 HtmlWebpackPlugin 的配置对象
      args[0].title = "厚车集市";
      args[0].inject = true;
      return args;
    });
  },
});
