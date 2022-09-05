import { useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { debounce } from '@/utils/debounce'
import './AppHeader.css'

// path: '/app_search',
// path: '/app_blog',
// path: '/app_yingyin',
// path: '/app_author',
// path: '/app_space',
const navs = [
  {
    key: 2,
    name: '博客',
    sub_nav: [{ name: '内容' }, { name: '哔哩' }, { name: '归档' }],
  },
  {
    key: 3,
    name: '影音',
    sub_nav: [{ name: '相册' }, { name: '足迹' }, { name: '物品' }],
  },
  {
    key: 4,
    name: '作者',
    sub_nav: [
      { name: '简介', path: '/app-author' },
      { name: '项目' },
      { name: '友链' },
    ],
  },
  {
    key: 5,
    name: '空间',
    sub_nav: [{ name: '速查' }, { name: '论坛' }, { name: '服务' }],
  },
]
function AppHeader(props:any) {
  const {  onClickSearch } = props
  const navigate       = useNavigate()
  const menuRef        = useRef<any>()    // 菜单
  const menuMaskRef    = useRef<any>()    // 菜单遮罩
  const hamburgerRef   = useRef<any>()    // 显示菜单按钮
  const subMenuItemRef = useRef<any>([])  // 子菜单数组
  // 导航跳转
  const onNavigate = (value: string) => {
    if (value == '/') {
      return navigate('/')  // 判断是否是主页
    }
    console.log(1);
    
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
        <article className="App-Logo" onClick={() => onNavigate('/')}> Logo </article>
        {/* 遮罩 */}
        <article  className="App-menu-mask" ref={menuMaskRef} onClick={onDisplayOrHideMenus}></article>
        {/* 菜单 */}
        <ul className="App-menu" ref={menuRef}>
          {/* 定制搜索 */}
          <li onClick={onClickSearch}>
            <p>搜索</p>            
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

/**
 * 渲染子菜单
 *  */
const AppSubMenuRender = (props: any) => {
  const { items, subMenuItemRef, onNavigate } = props
  // 将 ref 统一添加到数组中
  const getSubMenuItem = (value: any) => {
    subMenuItemRef.current.push(value)
  }
  return (
    <ol className="App-sub-menu">
      {items.sub_nav?.map((item: any) => (
        <li
          key={item.name}
          ref={getSubMenuItem}
          onClick={() => onNavigate(item.path)}>
          <span>图</span>
          <p>{item.name}</p>
        </li>
      ))}
    </ol>
  )
}

export default AppHeader
