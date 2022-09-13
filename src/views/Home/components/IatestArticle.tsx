import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/***
 * 最新文章组件
 *  */
interface propsType {
  datalist: {
    key: string
    title: string
    title_img: string
    describe: string
  }[]
}
export const IatestArticleRender = (props: propsType) => {
  const { datalist } = props
  const navigate = useNavigate()
  const [latestArticle, setLatestArticle] = useState(() => datalist.slice(0, 3))
  const onNavigate = (value: string) => {
    // navigate()
    alert('无权访问,请联系博主')
  }

  return (
    <article className="Home-latest-article">
      <p className="Home-latest-article-title">LATEST ARTICLE</p>
      <ul className="Home-latest-article-ul">
        {latestArticle.map((item) => (
          <li key={item.key} onClick={() => onNavigate(item.key + item.title)}>
            <div className="Home-latest-article-content">
              {item.describe.substring(0, 25) + '...'}
            </div>
            <div className="Home-latest-article-img">
              <div style={{ backgroundImage: `URL(${item.title_img})` }}></div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
