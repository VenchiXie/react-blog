import { useEffect, useRef } from 'react'
import type { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { onNext, onNextDot } from '@/store/slice/homeSlice'
import { IntroductionRender, IatestArticleRender } from './components'
import { articlesAPI } from '@/api/articleAPI'
import AppFooter from '@/components/AppFooter/AppFooter'
import '@/styles/AppHome.css'

/**
 * 首页
 *  */
function AppHome() {
  const dispatch = useDispatch()
  const { index } = useSelector((state: RootState) => state.home)

  const currentDot = useRef<any>([])
  const { introduction } = JSON.parse(localStorage.getItem('user') as string)

  // 获取所有有 dot
  const getDotAll = (dom: any) => {
    currentDot.current.push(dom)
  }

  // 下一个 next 显示
  const onNextDisplay = () => {
    dispatch(onNext(introduction.length - 1))
  }

  // 根据 dot 点击显示
  useEffect(() => {
    let timer = setTimeout(() => {
      currentDot.current.forEach((item: any, index: number) => {
        item.onclick = () => {
          dispatch(onNextDot(index))
        }
      })
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className="Home">
      <main className="Home-main">
        <article className="Home-content">
          <h1>🍪重构中...🍪</h1>
        </article>

        {/* 名称 */}
        <article className="Home-name">
          <span>林</span>
          <span>染</span>
        </article>
        {/* 最新文章 */}
        <IatestArticleRender datalist={articlesAPI}></IatestArticleRender>
        {/* 个人介绍 */}
        <IntroductionRender
          index={index}
          getDotAll={getDotAll}
          introduction={introduction}
          onNextDisplay={onNextDisplay}
        />
      </main>
      <AppFooter></AppFooter>
    </section>
  )
}

export default AppHome
