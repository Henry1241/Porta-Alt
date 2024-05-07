module.exports = {
  publicPath: 'http://localhost:8080',
  outputDir: '../static/dist',
  indexPath: '../../templates/baseVue.html',

  configureWebpack: {
    devServer: {
      devMiddleware: {
        writeToDisk: true
      }
    }
  }
}
