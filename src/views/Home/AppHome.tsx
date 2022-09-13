import { useState, useEffect, useRef } from 'react'
import { IntroductionRender } from './components/IntroductionRender'
import { IatestArticleRender } from './components/IatestArticle'
import AppFooter from '@/components/AppFooter/AppFooter'
import { articlesAPI } from '@/api/articleAPI'
import '@/styles/AppHome.css'
/**
 * 首页
 *  */
const introductionText = [
  {
    key: '1',
    name: 'info',
    text: `你好！我叫林染，Bug制造功城狮。愿煦日的和风护卫着可爱的你，愿你带着满满的春笑回来。`,
  },
  {
    key: '2',
    name: 'job',
    text: `欢迎各位大佬来查看我的简介和项目。`,
  },
  {
    key: '3',
    name: 'SNS',
    text: `欢迎查阅我的个人笔记`,
  },
  {
    key: '4',
    name: 'last',
    text: `本网站正在建设中，如果发现问题欢迎提交你的反馈信息。`,
  },
]

function AppHome() {
  const homeBackgroundRef             = useRef<HTMLInputElement>(null)
  let   [globalIndex, setGlobalIndex] = useState(0)                     // 当时索引

  // 根据 dot 切换 introduction text 
  const handleSwitchTo = (index: number) => {
    // 后期采用 redux
    const introductionDot        = document.querySelectorAll('.Home-introduction-dot span')
    const currentIntroductionDot = document.querySelector('.Home-introduction-dot span.active')

    setGlobalIndex(index)
    currentIntroductionDot?.classList.remove('active') // 删除有 active 属性的标签
    introductionDot[index].classList.add('active') // 根据当前下标添加 active
  }

  // 下一个 next 
  const onNext = () => {
    const introductionDot = document.querySelectorAll('.Home-introduction-dot span') 
    let index = globalIndex + 1
    if (index <= introductionDot.length - 1) {
      handleSwitchTo(index)
    } else {
      handleSwitchTo((index = 0))
    }
  }
  useEffect(() => {
    // 后期采用 redux
    let timer = setTimeout(() => {
      const introductionDot = document.querySelectorAll('.Home-introduction-dot span')
      introductionDot.forEach((item: any, index: number) => {
        item.onclick = () => {handleSwitchTo(index)}
      })
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <section className="Home" ref={homeBackgroundRef}>
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
        <IatestArticleRender datalist={ articlesAPI}></IatestArticleRender>
        {/* 个人介绍 */}
        <IntroductionRender
          globalIndex={globalIndex}
          introductionText={introductionText}
          onNext={onNext}></IntroductionRender>
      </main>
      <AppFooter></AppFooter>
    </section>
  )
}



export default AppHome
