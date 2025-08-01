const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  devServer: {
    historyApiFallback: true, // ✅ 确保这个是 true，或者不要覆盖它（默认就是 true）
  },
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
