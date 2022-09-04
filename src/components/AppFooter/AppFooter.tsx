import { useEffect, useRef, useState } from 'react'
import './AppFooter.css'

const tabs = [
  {
    name: '导航',
    sub_tab: [
      { name: '博客', path: '/app-blog' },
      { name: '相册', path: '/app-album' },
      { name: '项目', path: '/app-project' },
      { name: '统一', path: '/app-census' },
      { name: '时间轴', path: '/app-timeaxis' },
    ],
  },
  {
    name: '标签',
    sub_tab: [
      { name: '技术杂谈', path: '/app-technology' },
      { name: '生活日记', path: '/app-life' },
      { name: '旅行日记', path: '/app-travel' },
    ],
  },

  {
    name: '笔记',
    sub_tab: [
      { name: 'bing', path: 'https://cn.bing.com/?mkt=zh-CN' },
      { name: 'bing2', path: 'https://cn.bing.com/?mkt=zh-CN' },
    ],
  },
  {
    name: '社区',
    sub_tab: [
      { name: '知乎', href: 'https://www.zhihu.com/' },
      { name: 'GitHub', href: 'https://github.com/' },
    ],
  },
  {
    name: '友链',
    sub_tab: [
      { key: 'a', name: '友链1', href: '友链1' },
      { key: 'b', name: '友链2', href: '友链2' },
      { key: 'c', name: '友链3', href: '友链3' },
      { key: 'd', name: '友链4友链4友链4', href: '友链4' },
      { key: 'e', name: '更多友链', path: '更多友链' },
    ],
  },
  {
    name: '关于本站',
    sub_tab: [
      { name: '关于主题', path: '友链1' },
      { name: '版本声明', path: '友链2' },
    ],
  },
]

/**
 * 底部栏
 *  */
function AppFooter() {
  return (
    <footer className="App-footer">
      <article className="App-footer-table">
        {/* tabs */}
        <ul className="App-footer-ul">
          {tabs.map((items) => (
            <li key={items.name}>
              <p>{items.name}</p>
              <AppSubMenuRender items={items}></AppSubMenuRender>
            </li>
          ))}
        </ul>
        {/* 声明与备案 */}
        <div className="declaration-and-filing">
          <a href="declaration">declaration</a>
          <a href="filing">filing</a>
        </div>
      </article>
    </footer>
  )
}

/* 子菜单渲染 */
const AppSubMenuRender = (props: any) => {
  const { items } = props
  return (
    <ol className="App-footer-ol">
      {items.sub_tab.map((item: any) => (
        <li key={item.name}>
          {/* tabs 中是否有友链的 "key"，有则渲染 <a> 标签，没有则渲染 <p> 标签*/}
          {item.key ? (
            // 超出4个字则进行截取
            <a href={item.href} target="_blank">
              {item.name.length > 4
                ? item.name.substr(0, 4) + '...'
                : item.name}
            </a>
          ) : (
            // 4个字以下正常遍历
            <p>{item.name}</p>
          )}
        </li>
      ))}
    </ol>
  )
}

export default AppFooter
