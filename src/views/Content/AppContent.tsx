import { useEffect, useRef, useState,} from 'react'
import { useNavigate } from 'react-router-dom'
import { ContentTop, ContentArticle, ContentSaysay,ContentLatestArticle,ContentTags,ContentFile } from './components/index'
import AppPaging from '@/components/AppPaging/AppPaging'
import AppFooter from '@/components/AppFooter/AppFooter'

import { tagAPI } from '@/api/tagAPI'
import { articlesAPI } from '@/api/articleAPI'
import { articlesTopAPI } from '@/api/articlesTopAPI'
import '@/styles/AppContent.css'

/***
 * 内容页
 *  */

const paging:any = {
  pageSize : 3,   // 每一页要显示的数据条数
  totalPage: 0,   // 总页数
  current  : localStorage.getItem('current')  || 1,   // 当前的页码
}
function AppContent() {
  
  const navigate = useNavigate()
  const onNavigate = (value: string) => {
    // alert(value)
    alert('无权访问,请联系博主')
  }

  // 文章数据列表
  const [datalist, setDatalist] = useState<any>([])
  useEffect(() => {
    let timer = setTimeout(() => {
      update()
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [])


  /**
   * 根据上下页点击页数的变化而变化
   *  */
  const update = () => {
    // 设置总页数
    paging.totalPage = Math.ceil(articlesAPI.length / paging.pageSize || 1)
    let before = (paging.current - 1) * paging.pageSize
    let after  = paging.current * paging.pageSize
    // 分割内容
    setDatalist(articlesAPI.slice(before, after))
  }
  return (
    <section className="Content">
      <main className="Content-main">
        <article className="Content-left">
          {/* 置顶标题文章 */}
          <ContentTop datalist={articlesTopAPI} onNavigate={onNavigate}></ContentTop>

          {/* 文章列表 */}
          <ContentArticle datalist={datalist} onNavigate={onNavigate}></ContentArticle>

          {/* 分页 */}
          <AppPaging paging={paging} update={update}></AppPaging>
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
