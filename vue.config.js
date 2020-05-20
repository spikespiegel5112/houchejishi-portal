// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '吉市分期'
        return args
      })
  }
}