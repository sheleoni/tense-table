const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/', // to fix routing issue: either use '/' as publicpath, or comment this line out
})
