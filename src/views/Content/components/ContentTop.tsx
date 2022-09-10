import { ContentArticleTags } from './ContentArticleTags'

/***
 * 置顶标题文章组件
 *  */

interface propsTyte {
  datalist: {
    key: string
    title: string
    isTop: boolean
    start_time: string
    count_time: string
    tags: string
    title_img: string
    describe: string
    content: string
  }[]
  onNavigate: (value: string) => void
}
interface subPropsTyte {
  item: {
    key: string
    title: string
    isTop: boolean
    start_time: string
    count_time: string
    tags: string
    title_img: string
    describe: string
    content: string
  }
  onNavigate: (value: string) => void
}
export const ContentTop = (props: propsTyte) => {
  const { datalist, onNavigate } = props
  return (
    <>
      {datalist.map((item) => {
        return item.isTop ? (
          <ContentTopRender
            key={item.key}
            item={item}
            onNavigate={onNavigate}
          />
        ) : (
          ''
        )
      })}
    </>
  )
}

const ContentTopRender = (props: subPropsTyte) => {
  const { item,onNavigate } = props
  return (
    <section className="Content-top" key={item.key} onClick={()=>onNavigate(item.key+item.title)}>
      <article className="Content-top-left">
        <div
          style={{ backgroundImage: `URL(${item.title_img})` }}
          className="Content-top-article-img"></div>
      </article>
      <article className="Content-top-right">
        <nav className="Content-top-title">
          {item.title.length > 20 ? item.title.substring(0, 20) + '...' : item.title}
        </nav>
        <ContentArticleTags tags={item}></ContentArticleTags>
        <main className="Content-top-article-describe">
          <p>{item.describe.length > 300 ? item.describe.substring(0, 300) + ' ...' : item.describe}</p>
        </main>
      </article>
    </section>
  )
}
