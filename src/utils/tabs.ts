/***
 * 底部菜单项
 *  */
export const tabs = [
  {
    key:1,
    name: "导航",
    sub_tab: [
      { name: "博客", path: "/app_content" },
      { name: "相册", path: "/app_album" },
      { name: "项目", path: "/app_project" },
      { name: "统一", path: "/" },
      { name: "时间轴", path: "/" },
    ],
  },
  {
    key:2,
    name: "标签",
    sub_tab: [
      { name: "技术杂谈", path: "/app_technology" },
      { name: "生活日记", path: "/app_life" },
      { name: "旅行日记", path: "/app_travel" },
    ],
  },

  {
    key:3,
    name: "笔记",
    sub_tab: [
      { name: "语雀", href: "https://www.yuque.com/dashboard" },
      { name: "bing", path: "https://cn.bing.com/?mkt=zh-CN" },
    ],
  },
  {
    key:4,
    name: "社区",
    sub_tab: [
      { name: "知乎", href: "https://www.zhihu.com/" },
      { name: "GitHub", href: "https://github.com/" },
    ],
  },
  {
    key:5,
    name: "友链",
    sub_tab: [
      { name: "loading", href: "友链1" },
      { name: "loading", href: "友链2" },
      { name: "loading", href: "友链3" },
      { name: "loading", href: "友链4" },
      { name: "更多友链", path: "/app_friend" },
    ],
  },
  {
    key:6,
    name: "关于本站",
    sub_tab: [
      { name: "关于主题", path: "友链1" },
      { name: "版本声明", path: "友链2" },
    ],
  },
];
