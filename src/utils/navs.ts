/***
 * 导航栏
 *  */
const navs = [
  {
    key: 1,
    name: "博客",
    sub_nav: [
      { name: "内容", icon: "home-outline", path: "/app_content" },
      { name: "项目", icon: "logo-steam", path: "/app_project" },
      { name: "归档", icon: "albums-outline", path: "/app_filing" },
    ],
  },
  {
    key: 2,
    name: "影音",
    sub_nav: [
      { name: "相册", icon: "image-outline", path: "/app_album" },
      { name: "足迹", icon: "location-outline", path: "/app_footmark" },
      { name: "哔哩", icon: "logo-twitch", href: "https://www.bilibili.com/" },
    ],
  },
  {
    key: 3,
    name: "作者",
    sub_nav: [
      { name: "简介", icon: "ribbon-outline", path: "/app_introduction" },
      { name: "物品", icon: "layers-outline", path: "/app_wupin" },
      { name: "友链", icon: "person-add-outline", path: "/app_friend" },
    ],
  },
  {
    key: 4,
    name: "空间",
    sub_nav: [
      {
        name: "速查",
        icon: "paper-plane-outline",
        href: "https://cn.bing.com/",
      },
      {
        name: "论坛",
        icon: "people-outline",
        href: "https://www.zhihu.com/",
      },
      {
        name: "服务",
        icon: "footsteps-outline",
        href: "https://www.code-nav.cn/",
      },
    ],
  },
];

export default navs;
