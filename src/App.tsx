import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from '@/components/AppHeader/AppHeader'
import AppSearch from './components/AppSearch/AppSearcht'
import AppSide from './components/AppSide/AppSide'

import type { RootState,AppDispatch } from '@/store'
import { useSelector,useDispatch } from 'react-redux'
import { getUser } from '@/store/slice/introductionSlice'
import { userAPI } from '@/api/userAPI'
import '@/styles/App.css'

/**
 * 布局页
 *  */
function App() {

  const dispatch:AppDispatch = useDispatch()
  const { isLoaded } = useSelector((state:RootState)=>state.introduction)

  useEffect(()=>{
    let timer = setTimeout(()=>{
      dispatch(getUser()) 
      userAPI      
    },300)
    return ()=>{
      clearTimeout(timer)
    }
  },[isLoaded]) 

  // 获取导航栏DOM
  const headerRef = useRef<HTMLElement>(null)
  // 记录滚动条的高度位置
  let oldScrollTop: number = document.documentElement.scrollTop || document.body.scrollTop
  /**
   * 1.页面导航栏上拉显示下拉隐藏
   * 2.记录滚动条的位置
   *  */
  const onScrollHandle = () => {
    let currentScrollTop = document.body.scrollTop || document.documentElement.scrollTop
    // 将当前的滚动高度进行缓存
    localStorage.setItem('scroll-top', JSON.stringify(currentScrollTop))
    // 获取导航栏的高度
    const headerHeight: number = headerRef.current?.offsetHeight as number

    // 当前滚动条高度 > 导航栏的高度时
    if (currentScrollTop > headerHeight) {
      headerRef.current?.classList.add('App-header-hide')
    } else {
      headerRef.current?.classList.remove('App-header-hide')
    }


    // 当前滚动条高度 < 导航栏的高度时
    if (currentScrollTop < oldScrollTop) {
      headerRef.current?.classList.remove('active')
      headerRef.current?.classList.remove('App-header-hide')
    }

    // 当前滚动条高度为0时去掉阴影
    if (currentScrollTop == 0) {
      headerRef.current?.classList.add('active')
      headerRef.current?.classList.remove('App-header-hide')
    }
    
    // 重新赋值
    oldScrollTop = document.documentElement.scrollTop || document.body.scrollTop
  }

  // 网页刷新后滚动条位置不变
  useEffect(() => {
    let timer = setTimeout(() => {
      window.addEventListener('scroll', onScrollHandle)
      document.body.scrollTop = parseInt(localStorage.getItem('scroll-top') as string)
      document.documentElement.scrollTop = parseInt(localStorage.getItem('scroll-top') as string)
    }, 100)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', onScrollHandle)
    }
  }, [])

  const searchRef = useRef<HTMLInputElement>(null)
  const searchWordKeyRef = useRef<HTMLInputElement>(null)
  // 打开搜索框
  const onClickSearch = () => {
    searchWordKeyRef.current?.focus()
    document.body.style.overflow = 'hidden' // 禁止滚动
    searchRef.current!.classList.toggle('active')
  }

  // 关闭搜索框
  const onCloseSearch = () => {
    document.body.style.overflowY = 'auto'  // 允许滚动
    searchRef.current!.classList.toggle('active')
  }

  return (
    <>
      {/* 搜索遮罩 */}
      <AppSearch searchRef={searchRef} onCloseSearch={onCloseSearch}></AppSearch>
      {/* 侧边小工具 */}
      <AppSide></AppSide>
      <header className="App-header" ref={headerRef} >
        <AppHeader headerRef={headerRef} onClickSearch={onClickSearch}></AppHeader>
      </header>
      <main className="App-main">
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default App
