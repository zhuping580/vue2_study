const port = 8081
const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  // publicPath: 'test',  // 部署应⽤包时的基本 URL
  devServer: {
    port,  // 端口号
    proxy: 'http://localhost:3000' // 代理地址
  },
  configureWebpack: {
    name: "vue项目最佳实践"  // 设置⼀个webpack配置项⽤于⻚⾯title
  },
  chainWebpack(config) {
    // 1.添加一个loader，负责去icon目录中加载图标，方便直接使用
    config.module.rule('icon')
      .include.add(resolve('src/icon')).end()
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({symbolId: 'icon-[name]'})
    
    // 2.当前项目下有一个加载svg的loader，svg规则排除icon目录
    config.module.rule('svg').exclude.add(resolve('src/icon'))
  }
}
