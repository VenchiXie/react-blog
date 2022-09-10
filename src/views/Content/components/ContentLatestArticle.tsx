interface propsType {
  datalist: {
    key: string
    title: string
    start_time: string
  }[]
  onNavigate: (value: string) => void
}
export const ContentLatestArticle = (props: propsType) => {
  const { datalist, onNavigate } = props
  return (
    <nav className="Content-right-latest-article">
      <header className="Content-right-header">图最近文章</header>
      <ul className="Content-right-latest-article-ul">
        {/* 后期将截取 10 ~ 14 个内容渲染 */}
        {datalist.map((item) => (
          <li key={item.key} onClick={() => onNavigate(item.key + item.title)}>
            <h4>
              {item.title.length > 20
                ? item.title.substring(0, 20) + '...'
                : item.title}
            </h4>
            <p>{item.start_time}</p>
          </li>
        ))}
      </ul>
    </nav>
  )
}
