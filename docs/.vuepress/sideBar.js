const sidebar = {//左侧列表
  '/frontend/vue/': [
    {
      title: 'Vue',
      collapsable: true,
      children: [
        {
          title: '属性',
          link: 'property'
        }
      ]
    }
  ],
  '/guide/ts/': [
    {
      title: 'Typescript 学习',
      collapsable: true,
      children: ['property', 'property']
    }
  ],            
  '/': [''] //不能放在数组第一个，否则会导致右侧栏无法使
}

module.exports = sidebar
