import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContentTop } from './components/ContentTop'
import { ContentArticle } from './components/ContentArticle'
import { articlesAPI } from '@/api/articleAPI'
import { articlesTopAPI } from '@/api/articlesTopAPI'
import { tagAPI } from '@/api/tagAPI'
import AppFooter from '@/components/AppFooter/AppFooter'
import '@/styles/AppContent.css'
import { ContentSaysay } from './components/ContentSaysay'
import { ContentLatestArticle } from './components/ContentLatestArticle'
import { ContentTags } from './components/ContentTags'
import { ContentFile } from './components/ContentFile'

/***
 * 内容页
 *  */
function AppContent() {
  const navigate = useNavigate()
  const onNavigate = (value: string) => {
    // alert(value)
    alert('无权访问,请联系博主')
  }
  return (
    <section className="Content">
      <main className="Content-main">
        <article className="Content-left">
          {/* 置顶标题文章 */}
          <ContentTop datalist={articlesTopAPI} onNavigate={onNavigate}></ContentTop>

          {/* 文章列表 */}
          <ContentArticle datalist={articlesAPI} onNavigate={onNavigate}></ContentArticle>
        </article>
        {/* 侧边信息 */}
        <article className="Content-right">
          {/* 说说 */}
          <ContentSaysay></ContentSaysay>
          {/* 最近文章 */}
          <ContentLatestArticle datalist={articlesAPI} onNavigate={onNavigate}></ContentLatestArticle>

          {/* 标签 */}
          <ContentTags datalist={tagAPI} onNavigate={onNavigate}></ContentTags>
         
          {/* 归档 */}
          <ContentFile onNavigate={onNavigate}></ContentFile>
        </article>
      </main>
      <AppFooter></AppFooter>
    </section>
  )
}

export default AppContent
