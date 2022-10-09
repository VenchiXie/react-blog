import { ContentArticleTags } from './ContentArticleTags'
import AppSmallLoading from '@/components/AppLoading/AppSmallLoading'

interface PropsType {
  isLoaded: boolean
  datalist: {
    key       : string | number
    title     : string
    isTop     : boolean
    start_time: string
    count_time: string
    tags      : string
    cover_img : string
    describe  : string
    content   : string
  }[]
  onNavigate: (value: string) => void
}

/***
 * 文章列表
 *  */
export const ContentArticle = (props: PropsType) => {
  const { isLoaded, datalist, onNavigate } = props
  return (
    <article className="Content-article">
      {datalist.map((item) => {
        return item.isTop == true ? (
          // 文章置顶
          <nav className="Content-article-top"  key={item.key}>
            <ArticleListRender item={item} isLoaded={isLoaded} onNavigate={onNavigate}
            />
          </nav>
        ) : (
          // 文章列表项
          <nav className="Content-article-list" key={item.key}>
            <ArticleListRender item={item} isLoaded={isLoaded} onNavigate={onNavigate}/>
          </nav>
        )
      })}
    </article>
  )
}

interface ItemType {
  isLoaded: boolean
  item    : {
    key       : string | number
    title     : string
    isTop     : boolean
    start_time: string
    count_time: string
    tags      : string
    cover_img : string
    describe  : string
    content   : string
  }
  onNavigate: (value: string) => void
}

/**
 * 文章列表的呈现
 *  */
const ArticleListRender = (props: ItemType) => {
  const { item, isLoaded ,onNavigate } = props
  return (
    <>
      {/* 左区域 */}
      <div className="Content-article-left" onClick={()=>onNavigate(item.title)}>
        {!isLoaded ? (
          <AppSmallLoading />
        ) : (
          <div
            style={{ backgroundImage: `URL(${item.cover_img})` }}
            className="Content-article-img"></div>
        )}
      </div>
      {/* 右区域 */}
      <div className="Content-article-right">
        <p className="Content-article-title" onClick={()=>onNavigate(item.title)}>
          {item.title.length > 20
            ? item.title.substring(0, 20) + '...'
            : item.title}
        </p>
        <ContentArticleTags tags={item}></ContentArticleTags>
        <aside className="Content-article-describe">
          <p>
            {item.describe.length > 150
              ? item.describe.substring(0, 150) + ' ...'
              : item.describe}
          </p>
        </aside>
      </div>
    </>
  )
}
