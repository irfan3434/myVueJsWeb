const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://github.com/irfan3434/myVueJsWeb' // Replace with your repository name
    : '/'
});
