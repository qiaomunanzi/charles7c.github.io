import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  
  {
    text: '学习笔记',
    items: [
      { text: '折腾记录', link: '/categories/notes/index', activeMatch: '/categories/notes/' },
      { text: '避坑指南', link: '/categories/issues/index', activeMatch: '/categories/issues/' }
    ],
    activeMatch: '/categories/'
  },
  {
    text: '我的工具',
    items: [
      { text: '工具 & 软件', link: '/categories/tools-softwares/index', activeMatch: '/categories/tools-softwares/' },
    ],
    activeMatch: '/categories/'
  },

  {
    text: '标签',
    link: '/tags',
    activeMatch: '/tags'
  },
  {
    text: '归档',
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
  { text: '导航页', link: 'https://nav.qxs-docs.top/nav' },
];