import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ContentTop,
  ContentArticle,
  ContentSaysay,
  ContentLatestArticle,
  ContentTags,
  ContentFile,
} from './components/index'
import AppPaging from '@/components/AppPaging/AppPaging'
import AppFooter from '@/components/AppFooter/AppFooter'

import type { RootState, AppDispatch } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { getArticle } from '@/store/slice/contentSlice'

import { tagAPI } from '@/api/tagAPI'
import { articlesAPI } from '@/api/articleAPI'
import { articlesTopAPI } from '@/api/articlesTopAPI'
import '@/styles/AppContent.css'

const paging: any = {
  current: Number(localStorage.getItem('current')) || 1, // 当前的页码
  pageSize : 3,   // 每一页要显示的数据条数
  totalPage: 0,   // 总页数
}
/***
 * 内容页
 *  */
function AppContent() {
  const navigate = useNavigate()
  const onNavigate = (value: string) => {
    // navigate(value)
    alert('无权访问,请联系博主')
  }

  const { isLoaded, data } = useSelector((state: RootState) => state.content)
  const dispatch: AppDispatch = useDispatch()
  const [datalist, setDatalist] = useState<any>([]) // 文章数据列表
  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(getArticle())
      update()
      console.log(isLoaded)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [isLoaded])

  /**
   * 根据上下页点击页数的变化而变化
   *  */
  // const update = () => {
  //   // 设置总页数
  //   paging.totalPage = Math.ceil(articlesAPI.length / paging.pageSize || 1)
  //   let before = (paging.current - 1) * paging.pageSize
  //   let after = paging.current * paging.pageSize
  //   // 分割内容
  //   setDatalist(articlesAPI.slice(before, after))
  // }
  const update = () => {
    // 设置总页数
    paging.totalPage = Math.ceil(data.length / paging.pageSize || 1)
    let before = (paging.current - 1) * paging.pageSize
    let after = paging.current * paging.pageSize
    // 分割内容
    setDatalist(data.slice(before, after))
  }
  return (
    <section className="Content">
      <main className="Content-main">
        <article className="Content-left">
          {/* 置顶标题文章 */}
          <ContentTop
            datalist={articlesTopAPI}
            onNavigate={onNavigate}></ContentTop>

          {/* 文章列表 */}
          <ContentArticle
            isLoaded={isLoaded}
            datalist={datalist}
            onNavigate={onNavigate}
          />

          {/* 分页 */}
          <AppPaging paging={paging} update={update}></AppPaging>
        </article>
        {/* 侧边信息 */}
        <article className="Content-right">
          {/* 说说 */}
          <ContentSaysay></ContentSaysay>
          {/* 最近文章 */}
          <ContentLatestArticle
            datalist={articlesAPI}
            onNavigate={onNavigate}
          />

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
