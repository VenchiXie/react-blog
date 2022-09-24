import { ContentArticleTags } from './ContentArticleTags'
import AppSmallLoading from '@/components/AppLoading/AppSmallLoading'

interface PropsType {
  isLoaded: boolean
  datalist: {
    key       : string | number
    title     : string
    isTop     : false
    start_time: string
    count_time: string
    tags      : string
    title_img : string
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
    <ul className="Content-articles">
      {datalist.map((item) => (
        <li key={item.key} onClick={() => onNavigate(item.key + item.title)}>
          {/* img */}
          <div className="Content-articles-item-left">
            {!isLoaded ? (
              <AppSmallLoading />
            ) : (
              <div
                style={{ backgroundImage: `URL(${item.title_img})` }}
                className="Content-articles-item-img"></div>
            )}
          </div>
          {/* articles */}
          <div className="Content-articles-item-right">
            <nav className="Content-articles-title">
              {item.title.length > 20
                ? item.title.substring(0, 20) + '...'
                : item.title}
            </nav>
            {/* tags */}
            <ContentArticleTags tags={item}></ContentArticleTags>
            <main className="Content-article-describe">
              <p>
                {item.describe.length > 150
                  ? item.describe.substring(0, 150) + ' ...'
                  : item.describe}
              </p>
            </main>
          </div>
        </li>
      ))}
    </ul>
  )
}
