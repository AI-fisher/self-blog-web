const navBar = require('./navBar')
const sideBar = require('./sideBar')

module.exports = {
  head: [// 设置 favor.ico，html/head 标题中添加 style 标签
    ['link', { rel: 'icon', href: `logo.png` }]
  ],
  title: 'AI-fisher 博客',
  description: 'AI-fisher 博客,专注前端技术栈分享',
  themeConfig: {
    // 头部导航栏
    nav: navBar,
    // 侧边导航栏
    sidebar: sideBar,
  }
}
