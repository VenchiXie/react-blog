import { useState, useEffect, useRef } from 'react'
import AppFooter from '@/components/AppFooter/AppFooter'
import '@/styles/AppHome.css'
import AppLoading from '@/components/AppLoading/AppLoading'
/**
 * 首页
 *  */

const introductionText = [
  {
    key: '1',
    name: 'info',
    text: `你好！我叫林染，xxxxx功城狮。愿煦日的和风护卫着可爱的你，愿你带着满满的春笑回来。`,
  },
  {
    key: '2',
    name: 'job',
    text: `欢迎大佬们来查看我的简介和项目。`,
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

const latestArticle = [
  {
    key: '1',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    img: '/src/assets/img/img21.jpg',
  },
  {
    key: '2',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    img: '/src/assets/img/img22.jpg',
  },
  {
    key: '3',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    img: '/src/assets/img/img24.jpg',
  },
]
function AppHome() {
  const homeBackgroundRef = useRef<HTMLInputElement>(null)
  let [globalIndex, setGlobalIndex] = useState(0) // 当时索引

  const handleSwitchTo = (index: number) => {
    // 后期采用 redux
    const introductionDot = document.querySelectorAll(
      '.Home-introduction-dot span'
    )
    const currentIntroductionDot = document.querySelector(
      '.Home-introduction-dot span.active'
    )

    setGlobalIndex(index)
    currentIntroductionDot?.classList.remove('active') // 删除有 active 属性的标签
    introductionDot[index].classList.add('active') // 根据当前下标添加 active
  }

  const onNext = () => {
    const introductionDot = document.querySelectorAll(
      '.Home-introduction-dot span'
    )
    let index = 1
    if (globalIndex >= introductionDot.length) {
      index = 0
    }
    if (globalIndex < 0) {
      index = introductionDot.length - 1
    }
    // setGlobalIndex(index++)
    handleSwitchTo(index++)
  }
  useEffect(() => {
    // 后期采用 redux
    let timer = setTimeout(() => {
      const introductionDot = document.querySelectorAll(
        '.Home-introduction-dot span'
      )
      introductionDot.forEach((item: any, index: number) => {
        item.onclick = () => {
          handleSwitchTo(index)
        }
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
          <span>Lin ran</span>
        </article>
        {/* 最新文章 */}
        <article className="Home-latest-article">
          <p className="Home-latest-article-title">LATEST ARTICLE</p>
          <ul className="Home-latest-article-ul">
            {latestArticle.map((item) => (
              <li key={item.key}>
                <div className="Home-latest-article-content">
                  {item.content.substring(0,23)+'...'}
                </div>
                <div className="Home-latest-article-img">
                  <img src={item.img}/>
                </div>
              </li>
            ))}
          </ul>
        </article>
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

/***
 * 个人介绍
 *  */
const IntroductionRender = (props: any) => {
  const { globalIndex, introductionText, onNext } = props
  return (
    <article className="Home-introduction">
      <nav className="Home-introduction-text">
        <ul className="Home-introduction-ul">
          {introductionText.map((item: any, index: number) => (
            <li key={item.key} className={globalIndex == index ? 'active' : ''}>
              {item.text}
            </li>
          ))}
        </ul>
        <footer className="Home-introduction-text-footer">
          {introductionText.map((item: any, index: number) => (
            <span
              key={item.key}
              className={
                globalIndex == index ? 'active' : 'Home-introduction-log'
              }>
              0{item.key} - {item.name}
            </span>
          ))}
          <span className="Home-introduction-text-next" onClick={onNext}>
            Next
          </span>
        </footer>
      </nav>
      <nav className="Home-introduction-dot">
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
      </nav>
    </article>
  )
}

export default AppHome
