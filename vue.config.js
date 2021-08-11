const path = require('path');

function resolve(url) {
  return path.resolve(__dirname, url);
}

module.exports = {
  chainWebpack: config => {
    // 从绝对路径代替相对路径
    config.resolve.alias.set('components', resolve('./src/components'))
  }
};
