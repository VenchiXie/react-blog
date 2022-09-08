
/***
 * 导航栏
 *  */ 
const navs = [
  {
    key: 2,
    name: '博客',
    sub_nav: [
      { name: '内容', path: '/app_content' },
      { name: '哔哩', href: 'https://www.bilibili.com/' },
      { name: '归档', path: '/app_filing' },
    ],
  },
  {
    key: 3,
    name: '影音',
    sub_nav: [
      { name: '相册', path: '/app_album' },
      { name: '足迹', path: '/app_footmark' },
      { name: '物品', path: '/app_wupin' },
    ],
  },
  {
    key: 4,
    name: '作者',
    sub_nav: [
      { name: '简介', path: '/app_introduction' },
      { name: '项目', path: '/app_project' },
      { name: '友链', path: '/app_friend' },
    ],
  },
  {
    key: 5,
    name: '空间',
    sub_nav: [
      { name: '速查', href: 'https://cn.bing.com/' },
      { name: '论坛', href: 'https://www.zhihu.com/'},
      { name: '服务', href: 'https://www.code-nav.cn/' },
    ],
  },
]

export default navs
