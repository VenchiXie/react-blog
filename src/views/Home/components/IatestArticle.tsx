interface latestArticleType {
  key: null | undefined | string | number
  content: string
  img: string | undefined
}

/***
 * 最新文章组件
 *  */
export const IatestArticleRender = (props: any) => {
  const { latestArticle } = props
  return (
    <article className="Home-latest-article">
      <p className="Home-latest-article-title">LATEST ARTICLE</p>
      <ul className="Home-latest-article-ul">
        {latestArticle.map((item: latestArticleType) => (
          <li key={item.key}>
            <div className="Home-latest-article-content">
              {item.content.substring(0, 23) + '...'}
            </div>
            <div className="Home-latest-article-img">
              <img src={item.img} />
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
