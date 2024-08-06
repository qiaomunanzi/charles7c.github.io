import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  
  {
    text: '我的分类',
    items: [
      { text: '折腾笔记', link: '/categories/notes/index', activeMatch: '/categories/notes/' },
      { text: '避坑指南', link: '/categories/issues/index', activeMatch: '/categories/issues/' }
    ],
    activeMatch: '/categories/'
  },
  {
    text: '我的工具',
    items: [
      { text: '工具软件', link: '/categories/tools/index', activeMatch: '/categories/tools/' },
      { text: '网站收藏夹', link: '/categories/sites/index', activeMatch: '/categories/sites/' }
    ],
    activeMatch: '/categories/'
  },

  {
    text: '我的标签',
    link: '/tags',
    activeMatch: '/tags'
  },
  {
    text: '我的归档',
    link: '/archives',
    activeMatch: '/archives'
  },
  {
    text: '关于',
    items: [
      { text: '关于知识库', link: '/about/index', activeMatch: '/about/index' },
      { text: '关于我', link: '/about/me', activeMatch: '/about/me' }
    ],
    activeMatch: '/about/' // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  },
  {
    text: '导航',
    items: [
      { text: '导航', link: 'https://nav.qxs-docs.top' }
  },
];