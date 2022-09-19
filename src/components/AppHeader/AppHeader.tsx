import { useEffect, useRef} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { debounce } from '@/utils/debounce'

import AppIcon from '@/components/AppIcon/AppIcon'
import navs from '@/utils/navs'
import './AppHeader.css'


/**
 * 导航栏
 *  */
function AppHeader(props:any) {
  const { onClickSearch } = props
  const { author } = JSON.parse(localStorage.getItem('user') as string)
  const navigate     = useNavigate()
  const { pathname } = useLocation()
  const menuRef        = useRef<any>()    // 菜单
  const menuMaskRef    = useRef<any>()    // 菜单遮罩
  const hamburgerRef   = useRef<any>()    // 显示菜单按钮
  const subMenuItemRef = useRef<any>([])  // 子菜单数组
  // 导航跳转
  const onNavigate = (value: string) => {
    if (pathname === value) return                  // 禁止多次点击相同的页
    if (value === '/') return navigate('/')         // 点击主页禁止下面效果  
    document.body.style.overflowY = 'auto'          // 允许滚动
    menuRef.current!.classList.toggle('active')     // 关闭菜单
    menuMaskRef.current.classList.toggle('active')  // 关闭菜单遮罩
    hamburgerRef.current.classList.toggle('active') // 显示菜单按钮
    navigate(value)
  }


  // 通过遮罩隐藏菜单 ,通过按钮显示菜单
  const onDisplayOrHideMenus = () => {
    const isMenuMaskRef = menuMaskRef.current.classList.toggle('active')
    if (isMenuMaskRef) {
      document.body.style.overflow = 'hidden' // 禁止滚动
    } else {
      document.body.style.overflowY = 'auto'  // 允许滚动
    }
    menuRef.current!.classList.toggle('active')
    hamburgerRef.current.classList.toggle('active')
  }


  // 监听当时屏幕的宽度, 宽度 > 768px 时允许滚动
  const currentScreenWidthListener = () => {    
    if (document.documentElement.offsetWidth >= 768) {
      document.body.style.overflowY = 'auto' // 允许滚动
    }
  }
  useEffect(() => {
    window.addEventListener('resize',debounce(currentScreenWidthListener, 300))
    return ()=>{
      window.removeEventListener('resize',debounce(currentScreenWidthListener, 300))
    }
  }, [])

  return (
    <>
      {/* 导航栏 */}
      <nav className="App-nav">
        {/* logo */}
        <article className="App-Logo" onClick={() => onNavigate('/')}>{author}</article>
        {/* 菜单遮罩 */}
        <article  className="App-menu-mask" ref={menuMaskRef} onClick={onDisplayOrHideMenus}></article>
        {/* 菜单 */}
        <ul className="App-menu" ref={menuRef}>
          {/* 定制搜索 */}
          <li onClick={onClickSearch}>
            <p>
              <AppIcon name="search-outline" size="small"></AppIcon>         
            </p>
          </li>
          {navs.map((items) => (
            <li key={items.key}>
              <p>{items.name}</p>
              {/* 渲染子菜单 */}
              <AppSubMenuRender items={items} subMenuItemRef={subMenuItemRef} onNavigate={onNavigate}/>
            </li>
          ))}
        </ul>
        {/* 点击菜单 */}
        <article className="App-hamburger" ref={hamburgerRef} onClick={onDisplayOrHideMenus}>
          <span></span>
          <span></span>
          <span></span>
        </article>
      </nav>
    </>
  )
}


interface subPropsType {
  items: {
    key: number
    name: string
    sub_nav: (
      | {
          name: string
          icon: string
          path: string
          href?: undefined
        }
      | {
          name: string
          icon: string
          href: string
          path?: undefined
        }
    )[]
  }
  subMenuItemRef: React.MutableRefObject<any>
  onNavigate: (value: string) => void
}

/**
 * 渲染子菜单
 *  */
const AppSubMenuRender = (props: subPropsType) => {
  const { items, subMenuItemRef, onNavigate } = props
  // 将 ref 统一添加到数组中,当点击菜单项时，则会关闭菜单（移动端）。
  const getSubMenuItem = (value: any) => {
    subMenuItemRef.current.push(value)
  }
  return (
    <ol className="App-sub-menu">
      {items.sub_nav?.map((item: any) => {
        return item.href ? (
            <a key={item.name} ref={getSubMenuItem} href={item.href} target="__blank">
              <span> <AppIcon name={item.icon} size="small"></AppIcon></span>
              <span>{item.name}</span>
              <span>&gt;</span>
            </a>
        ) : (
          <li
            key={item.name} ref={getSubMenuItem} onClick={() => onNavigate(item.path)}>
            <span> <AppIcon name={item.icon} size="small"></AppIcon></span>
            <span>{item.name}</span>
            <span>&gt;</span>
          </li>
        )
      })}
    </ol>
  )
}

export default AppHeader
