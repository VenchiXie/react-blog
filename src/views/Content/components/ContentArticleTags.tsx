/***
 * tags 组件
 *  */
interface propsType {
  tags: {
    isTop: boolean
    start_time: string
    count_time: string
    tags: string
  }
}
export const ContentArticleTags = (props: propsType) => {
  const { tags } = props

  return (
    <div className="Content-top-article-tags">
      {tags.isTop ? <span className="Content-article-istop">图置顶</span> : ''}
      <span>图发表于&nbsp;{tags.start_time}&nbsp;</span>
      <span>图更新于&nbsp;{tags.count_time}&nbsp;天前</span>
      <span>图类型&nbsp;&gt;&nbsp;{tags.tags}</span>
    </div>
  )
}
